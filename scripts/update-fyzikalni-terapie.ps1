param(
  [string]$SourceDocx = "",
  [string]$OutputTs = "src\preparedFyzikalniTerapie.ts",
  [string]$OutputDocxDir = "public\atestacni-otazky"
)

$ErrorActionPreference = "Stop"

if (-not $SourceDocx) {
  $SourceDocx = (Get-ChildItem "podklady\atestacni-otazky" -Filter "*.docx" | Sort-Object LastWriteTime -Descending | Select-Object -First 1).FullName
}

if (-not $SourceDocx) {
  throw "Could not find source DOCX."
}

function Clean-Text {
  param([string]$Value)
  return (($Value -replace "\s+", " ").Trim())
}

function ConvertTo-TsString {
  param([string]$Value)
  return ($Value | ConvertTo-Json -Compress)
}

function Escape-XmlText {
  param([string]$Value)
  return [System.Security.SecurityElement]::Escape($Value)
}

function Write-Utf8File {
  param(
    [string]$Path,
    [string]$Value
  )

  $encoding = New-Object System.Text.UTF8Encoding($false)
  [System.IO.File]::WriteAllText((Join-Path (Get-Location) $Path), $Value, $encoding)
}

function U {
  param([string]$Value)
  return [regex]::Replace($Value, "\\u([0-9a-fA-F]{4})", {
    param($Match)
    return [string][char]([Convert]::ToInt32($Match.Groups[1].Value, 16))
  })
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
      [xml]$xml = $reader.ReadToEnd()
    } finally {
      $reader.Close()
    }
  } finally {
    $zip.Dispose()
    $stream.Dispose()
  }

  $ns = New-Object System.Xml.XmlNamespaceManager($xml.NameTable)
  $ns.AddNamespace("w", "http://schemas.openxmlformats.org/wordprocessingml/2006/main")

  $paragraphs = New-Object System.Collections.Generic.List[string]
  foreach ($paragraph in $xml.SelectNodes("//w:body/w:p", $ns)) {
    $parts = New-Object System.Collections.Generic.List[string]
    foreach ($node in $paragraph.SelectNodes(".//w:t|.//w:tab|.//w:br", $ns)) {
      if ($node.LocalName -eq "t") {
        $parts.Add($node.InnerText)
      } else {
        $parts.Add(" ")
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
  $colonMatch = [regex]::Match($clean, "^(?<title>.{2,70}?):\s*(?<body>.+)$")
  if ($colonMatch.Success) {
    return [ordered]@{
      title = Clean-Text $colonMatch.Groups["title"].Value
      body = Clean-Text $colonMatch.Groups["body"].Value
    }
  }

  return [ordered]@{
    title = $clean
    body = ""
  }
}

function Get-PointLevel {
  param([string]$Text)

  $value = $Text.Trim()
  if ($value -match "^\d+[\.)]\s") { return 2 }
  if ($value -match "^[A-Z]\.\s") { return 3 }
  if ($value -match "^[a-z]\)\s") { return 4 }
  if ($value -match "^[-•]\s") { return 4 }
  return 1
}

function New-Point {
  param([string]$Text)

  return [ordered]@{
    text = Clean-Text $Text
    level = Get-PointLevel $Text
  }
}

function Get-QuestionPromptPart {
  param([string]$Text)
  $clean = Clean-Text ($Text -replace "^[0-9]+\.\s*", "" -replace "^[A-Z]\.\s*", "" -replace "^[a-z]\)\s*", "" -replace "^[-•]\s*", "")
  $split = [regex]::Split($clean, "\s[-:=]\s|:\s")
  $part = if ($split.Count -gt 0 -and $split[0].Length -ge 3) { $split[0] } else { $clean }
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
    if ($cards.Count -ge 24) { break }

    $chapterAnswer = if ($chapter.points.Count -gt 0) {
      (($chapter.points | Select-Object -First 6 | ForEach-Object { $_.text }) -join " ")
    } else {
      $chapter.title
    }
    $cards.Add([ordered]@{
      id = "$QuestionKey`:flashcard:$index"
      prompt = "$(U 'Shr\u0148 \u010d\u00e1st'): $(Get-QuestionPromptPart $chapter.title)"
      answer = $chapterAnswer
    })
    $index++

    foreach ($point in $chapter.points) {
      if ($cards.Count -ge 24) { break }
      $cards.Add([ordered]@{
        id = "$QuestionKey`:flashcard:$index"
        prompt = "$(U 'Co je d\u016fle\u017eit\u00e9 k bodu'): $(Get-QuestionPromptPart $point.text)?"
        answer = $point.text
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
      if ($point.text.Length -gt 35) {
        $items.Add($point.text)
      }
    }
  }

  $questions = New-Object System.Collections.Generic.List[object]
  $limit = [Math]::Min(12, $items.Count)
  for ($i = 0; $i -lt $limit; $i++) {
    $answer = $items[$i]
    $questions.Add([ordered]@{
      id = "$QuestionKey`:quiz:$($i + 1)"
      prompt = U "Vyber tvrzen\u00ed, kter\u00e9 odpov\u00edd\u00e1 zpracovan\u00e9 ot\u00e1zce."
      options = @(
        $answer,
        (U "Fyzik\u00e1ln\u00ed terapii lze indikovat bez ohledu na diagn\u00f3zu, kontraindikace a reakci pacienta."),
        (U "P\u0159i fyzik\u00e1ln\u00ed terapii nen\u00ed nutn\u00e9 \u0159e\u0161it d\u00e1vkov\u00e1n\u00ed, lokalizaci, intenzitu ani stav k\u016f\u017ee."),
        (U "Pokud zvolen\u00e1 procedura opakovan\u011b nem\u00e1 efekt, nen\u00ed pot\u0159eba postup p\u0159ehodnotit.")
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

function New-DocParagraph {
  param(
    [string]$Text,
    [int]$Level = 0,
    [bool]$Bold = $false,
    [int]$Size = 23,
    [int]$SpacingBefore = 0,
    [int]$SpacingAfter = 80
  )

  $left = @(0, 360, 720, 1080, 1440)[$Level]
  $boldXml = if ($Bold) { "<w:b/>" } else { "" }
  $sizeXml = [string]($Size * 2)
  $escaped = Escape-XmlText $Text
  return @"
<w:p>
  <w:pPr>
    <w:spacing w:before="$SpacingBefore" w:after="$SpacingAfter"/>
    <w:ind w:left="$left"/>
  </w:pPr>
  <w:r>
    <w:rPr>$boldXml<w:sz w:val="$sizeXml"/><w:szCs w:val="$sizeXml"/></w:rPr>
    <w:t xml:space="preserve">$escaped</w:t>
  </w:r>
</w:p>
"@
}

function New-DocxPackage {
  param(
    [string]$Path,
    [string]$Title,
    [object[]]$Chapters
  )

  Add-Type -AssemblyName System.IO.Compression.FileSystem

  $tempRoot = Join-Path "tmp" "fyzikalni-terapie-docx"
  $tempDir = Join-Path $tempRoot ([IO.Path]::GetFileNameWithoutExtension($Path))
  if (Test-Path $tempDir) {
    Remove-Item -Recurse -Force $tempDir
  }

  New-Item -ItemType Directory -Force -Path (Join-Path $tempDir "_rels") | Out-Null
  New-Item -ItemType Directory -Force -Path (Join-Path $tempDir "word") | Out-Null

  $contentTypesXml = @'
<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<Types xmlns="http://schemas.openxmlformats.org/package/2006/content-types">
  <Default Extension="rels" ContentType="application/vnd.openxmlformats-package.relationships+xml"/>
  <Default Extension="xml" ContentType="application/xml"/>
  <Override PartName="/word/document.xml" ContentType="application/vnd.openxmlformats-officedocument.wordprocessingml.document.main+xml"/>
</Types>
'@
  Write-Utf8File -Path (Join-Path $tempDir "[Content_Types].xml") -Value $contentTypesXml

  $relsXml = @'
<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<Relationships xmlns="http://schemas.openxmlformats.org/package/2006/relationships">
  <Relationship Id="rId1" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/officeDocument" Target="word/document.xml"/>
</Relationships>
'@
  Write-Utf8File -Path (Join-Path $tempDir "_rels\.rels") -Value $relsXml

  $body = New-Object System.Text.StringBuilder
  [void]$body.AppendLine((New-DocParagraph -Text $Title -Level 0 -Bold $true -Size 26 -SpacingAfter 220))

  for ($chapterIndex = 0; $chapterIndex -lt $Chapters.Count; $chapterIndex++) {
    $chapter = $Chapters[$chapterIndex]
    $roman = @("I","II","III","IV","V","VI","VII","VIII","IX","X","XI","XII","XIII","XIV","XV","XVI","XVII","XVIII","XIX","XX")[$chapterIndex]
    [void]$body.AppendLine((New-DocParagraph -Text "$roman. $($chapter.title)" -Level 0 -Bold $true -Size 16 -SpacingBefore 180 -SpacingAfter 90))
    foreach ($point in $chapter.points) {
      [void]$body.AppendLine((New-DocParagraph -Text $point.text -Level $point.level -Size 11 -SpacingAfter 45))
    }
  }

  $documentXml = @"
<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<w:document xmlns:w="http://schemas.openxmlformats.org/wordprocessingml/2006/main">
  <w:body>
$($body.ToString())
    <w:sectPr>
      <w:pgSz w:w="11906" w:h="16838"/>
      <w:pgMar w:top="1134" w:right="1134" w:bottom="1134" w:left="1134" w:header="708" w:footer="708" w:gutter="0"/>
    </w:sectPr>
  </w:body>
</w:document>
"@

  Write-Utf8File -Path (Join-Path $tempDir "word\document.xml") -Value $documentXml

  if (Test-Path $Path) {
    Remove-Item -Force $Path
  }
  $zipPath = Join-Path (Resolve-Path (Split-Path $Path -Parent)) (Split-Path $Path -Leaf)
  $zip = [System.IO.Compression.ZipFile]::Open($zipPath, [System.IO.Compression.ZipArchiveMode]::Create)
  try {
    [System.IO.Compression.ZipFileExtensions]::CreateEntryFromFile($zip, (Join-Path $tempDir "[Content_Types].xml"), "[Content_Types].xml") | Out-Null
    [System.IO.Compression.ZipFileExtensions]::CreateEntryFromFile($zip, (Join-Path $tempDir "_rels\.rels"), "_rels/.rels") | Out-Null
    [System.IO.Compression.ZipFileExtensions]::CreateEntryFromFile($zip, (Join-Path $tempDir "word\document.xml"), "word/document.xml") | Out-Null
  } finally {
    $zip.Dispose()
  }
}

$paragraphs = Get-DocxParagraphText $SourceDocx
$questions = [ordered]@{}
$questionTitles = [ordered]@{}
$currentKey = $null
$currentQuestionTitle = $null
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
      $questionTitles[$currentKey] = $currentQuestionTitle
    }

    $questionIndex = [int]$questionMatch.Groups["index"].Value
    $currentKey = "ix-fyzikalni-terapie:$($questionIndex - 1)"
    $currentQuestionTitle = "$questionIndex. $(Clean-Text $questionMatch.Groups["title"].Value)"
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
    $points = New-Object System.Collections.Generic.List[object]
    if ($chapterParts.body) {
      $points.Add((New-Point $chapterParts.body))
    }
    $currentChapter = [ordered]@{
      title = $chapterParts.title
      points = $points
    }
    continue
  }

  if (-not $currentChapter) {
    $currentChapter = [ordered]@{
      title = "Přehled"
      points = New-Object System.Collections.Generic.List[object]
    }
  }

  $currentChapter.points.Add((New-Point $paragraph))
}

if ($currentKey) {
  if ($currentChapter) {
    $currentChapters.Add($currentChapter)
  }
  $questions[$currentKey] = @($currentChapters.ToArray())
  $questionTitles[$currentKey] = $currentQuestionTitle
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
    [void]$builder.AppendLine("        points: [")
    foreach ($point in $chapter.points) {
      [void]$builder.AppendLine("          { text: $(ConvertTo-TsString $point.text), level: $($point.level) },")
    }
    [void]$builder.AppendLine("        ],")
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
type PreparedQuestionPoint = {
  text: string;
  level: number;
};

type PreparedQuestionData = {
  chapters: {
    title: string;
    points: PreparedQuestionPoint[];
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

Write-Utf8File -Path $OutputTs -Value $ts

New-Item -ItemType Directory -Force -Path $OutputDocxDir | Out-Null
foreach ($key in $questions.Keys) {
  $index = [int](($key -split ":")[1]) + 1
  $filePath = Join-Path $OutputDocxDir "ix-fyzikalni-terapie-$index.docx"
  New-DocxPackage -Path $filePath -Title $questionTitles[$key] -Chapters @($questions[$key])
}

Write-Host "Generated $($questions.Count) questions into $OutputTs and $OutputDocxDir"
