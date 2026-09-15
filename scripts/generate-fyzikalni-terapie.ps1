param(
  [string]$SourceDocx = "",
  [string]$OutputTs = "src\preparedFyzikalniTerapie.ts"
)

$ErrorActionPreference = "Stop"

function Clean-Text {
  param([string]$Value)
  return (($Value -replace "\s+", " ").Trim())
}

function Clean-PointText {
  param([string]$Value)
  return (Clean-Text ($Value -replace "^-\s*", ""))
}

function ConvertTo-TsString {
  param([string]$Value)
  return ($Value | ConvertTo-Json -Compress)
}

function Get-DocxParagraphText {
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

  $paragraphs = New-Object System.Collections.Generic.List[string]
  foreach ($paragraphMatch in [regex]::Matches($xml, "<w:p[\s\S]*?</w:p>")) {
    $paragraphXml = $paragraphMatch.Value
    $parts = New-Object System.Collections.Generic.List[string]
    foreach ($nodeMatch in [regex]::Matches($paragraphXml, "<w:t[^>]*>(?<text>[\s\S]*?)</w:t>|<w:tab[^>]*/>|<w:br[^>]*/>")) {
      if ($nodeMatch.Value -like "<w:tab*" -or $nodeMatch.Value -like "<w:br*") {
        $parts.Add(" ")
      } else {
        $parts.Add([System.Net.WebUtility]::HtmlDecode($nodeMatch.Groups["text"].Value))
      }
    }

    $text = Clean-Text (($parts.ToArray()) -join "")
    if ($text) {
      $paragraphs.Add($text)
    }
  }

  return @($paragraphs.ToArray())
}

function Get-CleanChapterTitle {
  param([string]$Line)
  return (Clean-Text ($Line -replace "^(XX|XIX|XVIII|XVII|XVI|XV|XIV|XIII|XII|XI|X|IX|VIII|VII|VI|V|IV|III|II|I)\.\s*", ""))
}

function Split-ChapterHeading {
  param([string]$Title)

  $clean = Clean-Text $Title
  $colonMatch = [regex]::Match($clean, "^(?<title>.{2,60}?):\s*(?<body>.+)$")
  if ($colonMatch.Success) {
    return [ordered]@{
      title = Clean-Text $colonMatch.Groups["title"].Value
      body = Clean-Text $colonMatch.Groups["body"].Value
    }
  }

  $dashMatch = [regex]::Match($clean, "^(?<title>.{2,120}?)\s+-\s+(?<body>.+)$")
  if ($dashMatch.Success) {
    return [ordered]@{
      title = Clean-Text $dashMatch.Groups["title"].Value
      body = Clean-Text $dashMatch.Groups["body"].Value
    }
  }

  return [ordered]@{
    title = $clean
    body = ""
  }
}

function Get-StructuredTextParts {
  param([string]$Text)

  $value = Clean-Text $Text
  $separator = "|||"

  $value = [regex]::Replace($value, "\s+-\s+(proudy:|tvar impulzu:|monopolární/bipolární|Druhy TENS|léčebné účinky DD:|aplikace:|indikace:|délka aplikace:|Předpis\b)", " $separator `$1")
  $value = [regex]::Replace($value, "\s+([A-Z][^\s]{2,35})\s+-\s+", " $separator `$1 - ")
  $value = [regex]::Replace($value, "\s+(Druhy TENS)\b", " $separator `$1")

  $parts = New-Object System.Collections.Generic.List[string]
  foreach ($part in ($value -split [regex]::Escape($separator))) {
    $clean = Clean-PointText $part
    if ($clean) {
      $hyphenParts = @($clean -split "\s+-\s+")
      if ($hyphenParts.Count -gt 2) {
        foreach ($hyphenPart in $hyphenParts) {
          $current = Clean-PointText $hyphenPart
          if ($current) {
            $parts.Add($current)
          }
        }
      } elseif ($clean.Length -gt 90 -and $clean.Contains(" - ")) {
        $buffer = ""
        foreach ($hyphenPart in $hyphenParts) {
          $current = Clean-PointText $hyphenPart
          if (-not $current) {
            continue
          }

          if (-not $buffer) {
            $buffer = $current
            continue
          }

          if ($buffer.Length -ge 45 -or $current -match "^[a-z0-9]") {
            $parts.Add($buffer)
            $buffer = $current
          } else {
            $buffer = "$buffer - $current"
          }
        }

        if ($buffer) {
          $parts.Add($buffer)
        }
      } else {
        $parts.Add($clean)
      }
    }
  }

  return @($parts.ToArray())
}

function Add-StructuredTextParts {
  param(
    [System.Collections.Generic.List[string]]$Target,
    [string]$Text
  )

  foreach ($part in (Get-StructuredTextParts $Text)) {
    $Target.Add($part)
  }
}

function Get-QuestionPromptPart {
  param([string]$Text)
  $clean = Clean-Text ($Text -replace "^[0-9]+\.\s*", "" -replace "^[A-Z]\.\s*", "" -replace "^[a-z]\)\s*", "")
  $split = [regex]::Split($clean, "\s[-:=]\s|:\s")
  $part = if ($split.Count -gt 0 -and $split[0].Length -ge 3) { $split[0] } else { $clean }
  if ($part.Length -gt 92) {
    return "$($part.Substring(0, 89))..."
  }
  return $part
}

function Get-ShortPromptTitle {
  param([string]$Text)
  $part = Get-QuestionPromptPart $Text
  if ($part.Length -gt 92) {
    return "$($part.Substring(0, 89))..."
  }
  return $part
}

function New-Flashcards {
  param(
    [string]$QuestionKey,
    [object[]]$Chapters
  )

  $cards = New-Object System.Collections.Generic.List[object]
  $index = 1

  foreach ($chapter in $Chapters) {
    if ($cards.Count -ge 24) {
      break
    }

    $chapterAnswer = if ($chapter.points.Count -gt 0) {
      (($chapter.points | Select-Object -First 6) -join " ")
    } else {
      $chapter.title
    }
    $cards.Add([ordered]@{
      id = "$QuestionKey`:flashcard:$index"
      prompt = "Shrn cast: $(Get-ShortPromptTitle $chapter.title)"
      answer = $chapterAnswer
    })
    $index++

    foreach ($point in $chapter.points) {
      if ($cards.Count -ge 24) {
        break
      }
      $cards.Add([ordered]@{
        id = "$QuestionKey`:flashcard:$index"
        prompt = "Co je dulezite k bodu: $(Get-QuestionPromptPart $point)?"
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

  $items = New-Object System.Collections.Generic.List[string]
  foreach ($chapter in $Chapters) {
    if ($chapter.title.Length -gt 35) {
      $items.Add($chapter.title)
    }
    foreach ($point in $chapter.points) {
      if ($point.Length -gt 35) {
        $items.Add($point)
      }
    }
  }

  $questions = New-Object System.Collections.Generic.List[object]
  $limit = [Math]::Min(12, $items.Count)
  for ($i = 0; $i -lt $limit; $i++) {
    $answer = $items[$i]
    $questions.Add([ordered]@{
      id = "$QuestionKey`:quiz:$($i + 1)"
      prompt = "Vyber tvrzeni, ktere odpovida zpracovane otazce."
      options = @(
        $answer,
        "Fyzikalni terapii lze indikovat bez ohledu na diagnozu, kontraindikace a reakci pacienta.",
        "Pri fyzikalni terapii neni nutne resit davkovani, lokalizaci, intenzitu ani stav kuze.",
        "Pokud zvolena procedura opakovane nema efekt, neni potreba postup prehodnotit."
      )
      correctOptionIndexes = @(0)
      explanation = $answer
    })
  }

  return @($questions.ToArray())
}

function Add-StringArray {
  param(
    [System.Text.StringBuilder]$Builder,
    [object[]]$Items,
    [string]$Indent
  )

  [void]$Builder.AppendLine("[")
  foreach ($item in $Items) {
    [void]$Builder.AppendLine("$Indent  $(ConvertTo-TsString $item),")
  }
  [void]$Builder.Append("$Indent]")
}

if (-not $SourceDocx) {
  $SourceDocx = (Get-ChildItem "podklady\atestacni-otazky" -Filter "*sjednocen*.docx" | Select-Object -First 1).FullName
}

if (-not $SourceDocx) {
  throw "Could not find the sjednocene cleneni DOCX source."
}

$paragraphs = Get-DocxParagraphText $SourceDocx
$questions = [ordered]@{}
$currentKey = $null
$currentChapters = $null
$currentChapter = $null

foreach ($paragraph in $paragraphs) {
  $questionMatch = [regex]::Match($paragraph, "^IX\./(?<index>\d+)\.?\s*(?<title>.+)$")
  if ($questionMatch.Success) {
    if ($currentKey) {
      if ($currentChapter) {
        $currentChapters.Add($currentChapter)
      }
      $questions[$currentKey] = @($currentChapters.ToArray())
    }

    $questionIndex = [int]$questionMatch.Groups["index"].Value
    $currentKey = "ix-fyzikalni-terapie:$($questionIndex - 1)"
    $currentChapters = New-Object System.Collections.Generic.List[object]
    $currentChapter = $null
    continue
  }

  if (-not $currentKey) {
    continue
  }

  $chapterMatch = [regex]::Match($paragraph, "^(?<roman>XX|XIX|XVIII|XVII|XVI|XV|XIV|XIII|XII|XI|X|IX|VIII|VII|VI|V|IV|III|II|I)\.\s+(?<title>.+)$")
  if ($chapterMatch.Success) {
    if ($currentChapter) {
      $currentChapters.Add($currentChapter)
    }
    $chapterParts = Split-ChapterHeading (Get-CleanChapterTitle $paragraph)
    $points = New-Object System.Collections.Generic.List[string]
    if ($chapterParts.body) {
      Add-StructuredTextParts $points $chapterParts.body
    }
    $currentChapter = [ordered]@{
      title = $chapterParts.title
      points = $points
    }
    continue
  }

  if (-not $currentChapter) {
    $currentChapter = [ordered]@{
      title = "Prehled"
      points = New-Object System.Collections.Generic.List[string]
    }
  }

  Add-StructuredTextParts $currentChapter.points $paragraph
}

if ($currentKey) {
  if ($currentChapter) {
    $currentChapters.Add($currentChapter)
  }
  $questions[$currentKey] = @($currentChapters.ToArray())
}

$builder = New-Object System.Text.StringBuilder
[void]$builder.AppendLine("{")
foreach ($key in $questions.Keys) {
  $chapters = @($questions[$key])
  [void]$builder.AppendLine("  $(ConvertTo-TsString $key): {")
  [void]$builder.AppendLine("    chapters: [")
  foreach ($chapter in $chapters) {
    [void]$builder.AppendLine("      {")
    [void]$builder.AppendLine("        title: $(ConvertTo-TsString $chapter.title),")
    [void]$builder.Append("        points: ")
    Add-StringArray $builder @($chapter.points.ToArray()) "        "
    [void]$builder.AppendLine("")
    [void]$builder.AppendLine("      },")
  }
  [void]$builder.AppendLine("    ],")

  $flashcards = New-Flashcards $key $chapters
  [void]$builder.AppendLine("    flashcards: [")
  foreach ($card in $flashcards) {
    [void]$builder.AppendLine("      {")
    [void]$builder.AppendLine("        id: $(ConvertTo-TsString $card.id),")
    [void]$builder.AppendLine("        prompt: $(ConvertTo-TsString $card.prompt),")
    [void]$builder.AppendLine("        answer: $(ConvertTo-TsString $card.answer),")
    [void]$builder.AppendLine("      },")
  }
  [void]$builder.AppendLine("    ],")

  $quizQuestions = New-QuizQuestions $key $chapters
  [void]$builder.AppendLine("    quizQuestions: [")
  foreach ($quiz in $quizQuestions) {
    [void]$builder.AppendLine("      {")
    [void]$builder.AppendLine("        id: $(ConvertTo-TsString $quiz.id),")
    [void]$builder.AppendLine("        prompt: $(ConvertTo-TsString $quiz.prompt),")
    [void]$builder.Append("        options: ")
    Add-StringArray $builder @($quiz.options) "        "
    [void]$builder.AppendLine(",")
    [void]$builder.AppendLine("        correctOptionIndexes: [$($quiz.correctOptionIndexes -join ', ')],")
    [void]$builder.AppendLine("        explanation: $(ConvertTo-TsString $quiz.explanation),")
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
Write-Host "Generated $($questions.Count) questions into $OutputTs"
