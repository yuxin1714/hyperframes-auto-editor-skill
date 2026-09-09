param(
  [string]$Destination = "$env:USERPROFILE\.codex\skills\hyperframes-auto-editor"
)

$ErrorActionPreference = "Stop"
$Repository = "https://github.com/yuxin1714/hyperframes-auto-editor-skill.git"
$GitDirectory = Join-Path $Destination ".git"

if (Test-Path -LiteralPath $GitDirectory) {
  git -C $Destination pull --ff-only
  exit $LASTEXITCODE
}

if (Test-Path -LiteralPath $Destination) {
  $entries = Get-ChildItem -LiteralPath $Destination -Force
  if ($entries.Count -gt 0) {
    throw "Destination exists and is not an installed Git repository: $Destination"
  }
}

git clone $Repository $Destination
exit $LASTEXITCODE
