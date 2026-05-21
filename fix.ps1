$file = "C:\Users\smitp\.gemini\antigravity\scratch\smit-portfolio\src\App.jsx"
$lines = Get-Content $file
$keep = $lines[0..527] + $lines[579..($lines.Length - 1)]
Set-Content $file $keep -Encoding UTF8
Write-Output "Done! Removed lines 529-580. Total lines now: $($keep.Length)"
