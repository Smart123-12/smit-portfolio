$file = "C:\Users\smitp\.gemini\antigravity\scratch\smit-portfolio\src\App.jsx"
$lines = Get-Content $file -Encoding UTF8
# Find the line with "export default function App"
$exportLine = -1
for ($i = $lines.Length - 1; $i -ge 0; $i--) {
    if ($lines[$i] -match "export default function App") {
        $exportLine = $i
        break
    }
}
Write-Output "Export found at line: $($exportLine + 1)"

# Find the FIRST "function ProjectDetailPage" 
$firstDetail = -1
for ($i = 0; $i -lt $lines.Length; $i++) {
    if ($lines[$i] -match "function ProjectDetailPage") {
        $firstDetail = $i
        break
    }
}
Write-Output "First ProjectDetailPage at line: $($firstDetail + 1)"

# Find the closing } of the first ProjectDetailPage (the one before the duplicate)
# It ends with a } on its own line before the duplicate starts
$endBrace = -1
for ($i = $firstDetail + 1; $i -lt $lines.Length; $i++) {
    if ($lines[$i].Trim() -eq "}" -and $i -gt $firstDetail + 10) {
        # Check if next non-empty line starts another function or has leftover code
        $nextContent = ""
        for ($j = $i + 1; $j -lt $lines.Length; $j++) {
            if ($lines[$j].Trim() -ne "") {
                $nextContent = $lines[$j].Trim()
                break
            }
        }
        if ($nextContent -match "const d = " -or $nextContent -match "// .* APP") {
            $endBrace = $i
            break
        }
    }
}
Write-Output "First detail page ends at line: $($endBrace + 1)"
Write-Output "Next content: $nextContent"

# Keep lines: 0..endBrace, then find the "// APP" line and keep from there
$appComment = -1
for ($i = $endBrace + 1; $i -lt $lines.Length; $i++) {
    if ($lines[$i] -match "APP") {
        $appComment = $i
        break
    }
}

# Find second "export default function App" 
$secondExport = -1
for ($i = $endBrace + 1; $i -lt $lines.Length; $i++) {
    if ($lines[$i] -match "export default function App") {
        $secondExport = $i
        break
    }
}
Write-Output "Second export at line: $($secondExport + 1)"

# Find the end of the second App function
$appEnd = -1
$braceCount = 0
$started = $false
for ($i = $secondExport; $i -lt $lines.Length; $i++) {
    foreach ($c in $lines[$i].ToCharArray()) {
        if ($c -eq '{') { $braceCount++; $started = $true }
        if ($c -eq '}') { $braceCount-- }
    }
    if ($started -and $braceCount -eq 0) {
        $appEnd = $i
        break
    }
}
Write-Output "App function ends at line: $($appEnd + 1)"

# Build clean file: first detail page + app export
$clean = $lines[0..$endBrace] + @("") + $lines[$secondExport..$appEnd] + @("")
Set-Content $file $clean -Encoding UTF8
Write-Output "Done! Clean file has $($clean.Length) lines"
