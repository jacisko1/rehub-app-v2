param(
  [string]$SourceDocx = "",
  [string]$OutputTs = "src\preparedFyzikalniTerapie.ts"
)

$ErrorActionPreference = "Stop"

function ConvertTo-SafeStringLiteral {
  param([string]$Value)
  return ($Value | ConvertTo-Json -Compress)
}

function Clean-Text {
  param([string]$Value)
  return (($Value -replace "\s+", " ").Trim())
}

function Get-RomanNumeral {
  param([int]$Number)

  $map = @(
    @(1000, "M"), @(900, "CM"), @(500, "D"), @(400, "CD"),
    @(100, "C"), @(90, "XC"), @(50, "L"), @(40, "XL"),
    @(10, "X"), @(9, "IX"), @(5, "V"), @(4, "IV"), @(1, "I")
  )
  $result = ""
  foreach ($entry in $map) {
    while ($Number -ge $entry[0]) {
      $result += $entry[1]
      $Number -= $entry[0]
    }
  }
  return $result
}

function Get-LetterMarker {
  param(
    [int]$Number,
    [bool]$Upper = $true
  )

  $alphabet = if ($Upper) { "ABCDEFGHIJKLMNOPQRSTUVWXYZ" } else { "abcdefghijklmnopqrstuvwxyz" }
  $result = ""
  while ($Number -gt 0) {
    $Number--
    $result = $alphabet[$Number % 26] + $result
    $Number = [Math]::Floor($Number / 26)
  }
  return $result
}

function Get-Marker {
  param(
    [int]$Level,
    [int]$Number
  )

  switch ($Level) {
    0 { return "$(Get-RomanNumeral $Number)." }
    1 { return "$Number." }
    2 { return "$(Get-LetterMarker $Number $true)." }
    3 { return "$(Get-LetterMarker $Number $false)." }
    default { return "$Number)" }
  }
}

function Get-DocxParagraphs {
  param([string]$Path)

  Add-Type -AssemblyName System.IO.Compression
  Add-Type -AssemblyName System.IO.Compression.FileSystem
  $resolved = Resolve-Path $Path
  $stream = [System.IO.File]::Open($resolved, [System.IO.FileMode]::Open, [System.IO.FileAccess]::Read, [System.IO.FileShare]::ReadWrite)
  $zip = New-Object System.IO.Compression.ZipArchive($stream, [System.IO.Compression.ZipArchiveMode]::Read)
  try {
    $entry = $zip.GetEntry("word/document.xml")
    $reader = New-Object System.IO.StreamReader($entry.Open())
    try {
      $xml = $reader.ReadToEnd()
    } finally {
      $reader.Close()
    }
  } finally {
    $zip.Dispose()
    $stream.Dispose()
  }

  $paragraphs = New-Object System.Collections.Generic.List[object]
  foreach ($paragraphMatch in [regex]::Matches($xml, "<w:p[\s\S]*?</w:p>")) {
    $paragraphXml = $paragraphMatch.Value
    $pieces = New-Object System.Collections.Generic.List[string]

    foreach ($nodeMatch in [regex]::Matches($paragraphXml, "<w:t[^>]*>(?<text>[\s\S]*?)</w:t>|<w:tab[^>]*/>|<w:br[^>]*/>")) {
      if ($nodeMatch.Value -like "<w:tab*") {
        $pieces.Add(" ")
      } elseif ($nodeMatch.Value -like "<w:br*") {
        $pieces.Add(" ")
      } else {
        $pieces.Add([System.Net.WebUtility]::HtmlDecode($nodeMatch.Groups["text"].Value))
      }
    }

    $text = Clean-Text (($pieces.ToArray()) -join "")
    if (-not $text) {
      continue
    }

    $ilvlMatch = [regex]::Match($paragraphXml, "<w:ilvl w:val=`"(?<value>\d+)`"")
    $numIdMatch = [regex]::Match($paragraphXml, "<w:numId w:val=`"(?<value>\d+)`"")
    $level = if ($ilvlMatch.Success -and $numIdMatch.Success) { [int]$ilvlMatch.Groups["value"].Value } else { $null }

    $splitTexts = @([regex]::Split($text, "\s+(?=(?:IX|X)\./\d+\.)") | Where-Object { $_ })
    for ($splitIndex = 0; $splitIndex -lt $splitTexts.Count; $splitIndex++) {
      $splitText = Clean-Text $splitTexts[$splitIndex]
      $splitLevel = if ($splitText -match "^(?:IX|X)\./\d+\.") { $null } else { $level }
      $paragraphs.Add([ordered]@{
        text = $splitText
        level = $splitLevel
      })
    }
  }

  return @($paragraphs.ToArray())
}

function New-Chapters {
  param([object[]]$Paragraphs)

  $chapters = New-Object System.Collections.Generic.List[object]
  $currentTitle = "Přehled"
  $currentPoints = New-Object System.Collections.Generic.List[string]
  $counters = @{}
  $hasActiveChapter = $false

  foreach ($paragraph in $Paragraphs) {
    $line = Clean-Text $paragraph.text
    if (-not $line) {
      continue
    }

    $level = $paragraph.level
    if ($null -ne $level) {
      if (-not $counters.ContainsKey($level)) {
        $counters[$level] = 0
      }
      $counters[$level]++

      foreach ($key in @($counters.Keys)) {
        if ([int]$key -gt $level) {
          $counters.Remove($key)
        }
      }

      $line = "$(Get-Marker $level $counters[$level]) $line"
    }

    if ($null -ne $level -and $level -eq 0) {
      if ($hasActiveChapter -or $currentPoints.Count -gt 0) {
        $chapters.Add([ordered]@{ title = $currentTitle; points = @($currentPoints.ToArray()) })
        $currentPoints = New-Object System.Collections.Generic.List[string]
      }
      $currentTitle = $line
      $hasActiveChapter = $true
      continue
    }

    $currentPoints.Add($line)
  }

  if ($hasActiveChapter -or $currentPoints.Count -gt 0) {
    $chapters.Add([ordered]@{ title = $currentTitle; points = @($currentPoints.ToArray()) })
  }

  return @($chapters.ToArray())
}

function New-Flashcards {
  param(
    [string]$QuestionKey,
    [object[]]$Chapters
  )

  $cards = New-Object System.Collections.Generic.List[object]
  $index = 1
  foreach ($chapter in $Chapters) {
    if ($cards.Count -lt 20 -and $chapter.title -ne "Přehled") {
      $cards.Add([ordered]@{
        id = "$QuestionKey`:flashcard:$index"
        prompt = "Shrn cast: $($chapter.title)"
        answer = if ($chapter.points.Count -gt 0) { (($chapter.points | Select-Object -First 5) -join " ") } else { $chapter.title }
      })
      $index++
    }

    foreach ($point in $chapter.points) {
      if ($cards.Count -ge 20) {
        return @($cards.ToArray())
      }
      $prompt = "Co je dulezite k tematu: $($chapter.title)?"
      if ($point -match "^([^:-]{4,70})\s*[-:]\s*(.+)$") {
        $prompt = "Vysvetli pojem: $($Matches[1].Trim())"
      }
      $cards.Add([ordered]@{
        id = "$QuestionKey`:flashcard:$index"
        prompt = $prompt
        answer = $point
      })
      $index++
    }
  }
  return @($cards.ToArray())
}

function New-QuizQuestions {
  param(
    [string]$QuestionKey,
    [object[]]$Chapters
  )

  $pool = @($Chapters | ForEach-Object { $_.points } | Where-Object { $_.Length -gt 25 })
  $questions = New-Object System.Collections.Generic.List[object]
  $limit = [Math]::Min(12, $pool.Count)

  for ($i = 0; $i -lt $limit; $i++) {
    $answer = $pool[$i]
    $questions.Add([ordered]@{
      id = "$QuestionKey`:quiz:$($i + 1)"
      prompt = "Vyber tvrzeni, ktere odpovida zpracovane otazce."
      options = @(
        $answer,
        "Fyzikalni terapii lze aplikovat univerzalne bez ohledu na diagnozu, kontraindikace a reakci pacienta.",
        "Pokud procedura nema efekt, neni nutne menit postup ani po opakovanych aplikacich.",
        "U fyzikalni terapie nejsou dulezite davkovani, lokalizace, intenzita ani stav kuze."
      )
      correctOptionIndexes = @(0)
      explanation = $answer
    })
  }

  return @($questions.ToArray())
}

if (-not $SourceDocx) {
  $SourceDocx = (Get-ChildItem "podklady\atestacni-otazky" -Filter "*.docx" | Where-Object {
    $_.Name -like "*fyzik*terapie*"
  } | Select-Object -First 1).FullName
}

if (-not $SourceDocx) {
  throw "Could not find a source DOCX in podklady\atestacni-otazky."
}

$paragraphs = Get-DocxParagraphs $SourceDocx
$matches = @()
for ($paragraphIndex = 0; $paragraphIndex -lt $paragraphs.Count; $paragraphIndex++) {
  $match = [regex]::Match($paragraphs[$paragraphIndex].text, "^(?:IX|X)\./(?<index>\d+)\.\s*(?<title>.+)$")
  if ($match.Success) {
    $matches += [ordered]@{
      paragraphIndex = $paragraphIndex
      index = [int]$match.Groups["index"].Value
      title = Clean-Text $match.Groups["title"].Value
    }
  }
}
$result = [ordered]@{}

for ($i = 0; $i -lt $matches.Count; $i++) {
  $match = $matches[$i]
  $index = $match.index
  $title = $match.title
  $bodyStart = $match.paragraphIndex + 1
  $bodyEnd = if ($i + 1 -lt $matches.Count) { $matches[$i + 1].paragraphIndex } else { $paragraphs.Count }
  $bodyParagraphs = @()
  if ($bodyEnd -gt $bodyStart) {
    $bodyParagraphs = @($paragraphs[$bodyStart..($bodyEnd - 1)])
  }

  $questionKey = "ix-fyzikalni-terapie:$($index - 1)"
  $chapters = New-Chapters $bodyParagraphs
  if ($chapters.Count -eq 0) {
    $chapters = @([ordered]@{ title = $title; points = @("Podklady jsou pripravene v prilozenem dokumentu.") })
  }

  $result[$questionKey] = [ordered]@{
    chapters = $chapters
    flashcards = New-Flashcards $questionKey $chapters
    quizQuestions = New-QuizQuestions $questionKey $chapters
  }
}

function Add-StringArray {
  param(
    [System.Text.StringBuilder]$Builder,
    [object[]]$Items,
    [string]$Indent
  )

  [void]$Builder.AppendLine("[")
  foreach ($item in $Items) {
    [void]$Builder.AppendLine("$Indent  $(ConvertTo-SafeStringLiteral $item),")
  }
  [void]$Builder.Append("$Indent]")
}

$builder = New-Object System.Text.StringBuilder
[void]$builder.AppendLine("{")
foreach ($key in $result.Keys) {
  $question = $result[$key]
  [void]$builder.AppendLine("  $(ConvertTo-SafeStringLiteral $key): {")
  [void]$builder.AppendLine("    chapters: [")
  foreach ($chapter in @($question.chapters)) {
    [void]$builder.AppendLine("      {")
    [void]$builder.AppendLine("        title: $(ConvertTo-SafeStringLiteral $chapter.title),")
    [void]$builder.Append("        points: ")
    Add-StringArray $builder @($chapter.points) "        "
    [void]$builder.AppendLine("")
    [void]$builder.AppendLine("      },")
  }
  [void]$builder.AppendLine("    ],")

  [void]$builder.AppendLine("    flashcards: [")
  foreach ($card in @($question.flashcards)) {
    [void]$builder.AppendLine("      {")
    [void]$builder.AppendLine("        id: $(ConvertTo-SafeStringLiteral $card.id),")
    [void]$builder.AppendLine("        prompt: $(ConvertTo-SafeStringLiteral $card.prompt),")
    [void]$builder.AppendLine("        answer: $(ConvertTo-SafeStringLiteral $card.answer),")
    [void]$builder.AppendLine("      },")
  }
  [void]$builder.AppendLine("    ],")

  [void]$builder.AppendLine("    quizQuestions: [")
  foreach ($quiz in @($question.quizQuestions)) {
    [void]$builder.AppendLine("      {")
    [void]$builder.AppendLine("        id: $(ConvertTo-SafeStringLiteral $quiz.id),")
    [void]$builder.AppendLine("        prompt: $(ConvertTo-SafeStringLiteral $quiz.prompt),")
    [void]$builder.Append("        options: ")
    Add-StringArray $builder @($quiz.options) "        "
    [void]$builder.AppendLine(",")
    [void]$builder.Append("        correctOptionIndexes: ")
    [void]$builder.Append("[")
    [void]$builder.Append(($quiz.correctOptionIndexes -join ", "))
    [void]$builder.AppendLine("],")
    [void]$builder.AppendLine("        explanation: $(ConvertTo-SafeStringLiteral $quiz.explanation),")
    [void]$builder.AppendLine("      },")
  }
  [void]$builder.AppendLine("    ],")
  [void]$builder.AppendLine("  },")
}
[void]$builder.AppendLine("}")

$data = $builder.ToString()
$ts = @"
type PreparedQuestionData = {
  chapters: {
    title: string;
    points: string[];
  }[];
  flashcards: {
    id: string;
    prompt: string;
    answer: string;
  }[];
  quizQuestions: {
    id: string;
    prompt: string;
    options: string[];
    correctOptionIndexes: number[];
    explanation: string;
  }[];
};

export const physicalTherapyPreparedQuestions = ($data) satisfies Record<string, PreparedQuestionData>;
"@

Set-Content -Path $OutputTs -Value $ts -Encoding UTF8
Write-Host "Generated $($result.Count) questions into $OutputTs"
