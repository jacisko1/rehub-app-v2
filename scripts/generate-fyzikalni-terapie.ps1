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

function Get-DocxText {
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

  $xml = $xml -replace "<w:tab[^>]*/>", " "
  $xml = $xml -replace "</w:p>", "`n"
  $xml = $xml -replace "<[^>]+>", ""
  $text = [System.Net.WebUtility]::HtmlDecode($xml)
  return ($text -replace "`r", "")
}

function New-Chapters {
  param([string[]]$Lines)

  $chapters = New-Object System.Collections.Generic.List[object]
  $currentTitle = "Prehled"
  $currentPoints = New-Object System.Collections.Generic.List[string]

  foreach ($rawLine in $Lines) {
    $line = Clean-Text $rawLine
    if (-not $line) {
      continue
    }

    $wordCount = @($line -split "\s+" | Where-Object { $_ }).Count
    $startsLikeHeading = $line.Substring(0, 1) -cmatch "^(\p{Lu}|\d)$"
    $looksLikeHeading = $startsLikeHeading -and
      $line.Length -le 90 -and
      $wordCount -le 7 -and
      $line -match "^[\p{L}0-9]" -and
      $line -notmatch "\.$" -and
      $line -notmatch "\s-\s|:"

    if ($looksLikeHeading) {
      if ($currentPoints.Count -gt 0) {
        $chapters.Add([ordered]@{ title = $currentTitle; points = @($currentPoints) })
        $currentPoints = New-Object System.Collections.Generic.List[string]
      }
      $currentTitle = $line
      continue
    }

    if ($line.Length -gt 360) {
      $sentences = [regex]::Split($line, "(?<=[\.\?!])\s+")
      $buffer = ""
      foreach ($sentence in $sentences) {
        $sentence = Clean-Text $sentence
        if (-not $sentence) {
          continue
        }
        if (($buffer.Length + $sentence.Length) -gt 280 -and $buffer) {
          $currentPoints.Add($buffer)
          $buffer = $sentence
        } else {
          $buffer = (Clean-Text "$buffer $sentence")
        }
      }
      if ($buffer) {
        $currentPoints.Add($buffer)
      }
    } else {
      $currentPoints.Add($line)
    }
  }

  if ($currentPoints.Count -gt 0) {
    $chapters.Add([ordered]@{ title = $currentTitle; points = @($currentPoints) })
  }

  return @($chapters.ToArray() | Where-Object { $_.points.Count -gt 0 })
}

function New-Flashcards {
  param(
    [string]$QuestionKey,
    [object[]]$Chapters
  )

  $cards = New-Object System.Collections.Generic.List[object]
  $index = 1
  foreach ($chapter in $Chapters) {
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

$text = Get-DocxText $SourceDocx
$matches = [regex]::Matches($text, "(?:IX|X)\./(?<index>\d+)\.\s*(?<title>[^\n]+)")
$result = [ordered]@{}

for ($i = 0; $i -lt $matches.Count; $i++) {
  $match = $matches[$i]
  $index = [int]$match.Groups["index"].Value
  $title = Clean-Text $match.Groups["title"].Value
  $bodyStart = $match.Index + $match.Length
  $bodyEnd = if ($i + 1 -lt $matches.Count) { $matches[$i + 1].Index } else { $text.Length }
  $body = $text.Substring($bodyStart, $bodyEnd - $bodyStart)
  $lines = @($body -split "`n")

  $questionKey = "ix-fyzikalni-terapie:$($index - 1)"
  $chapters = New-Chapters $lines
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
