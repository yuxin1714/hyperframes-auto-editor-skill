param(
  [string]$Destination = "$env:USERPROFILE\.codex\skills\hyperframes-auto-editor"
)

$ErrorActionPreference = "Stop"
$Repository = "https://github.com/yuxin1714/hyperframes-auto-editor-skill.git"
$GitDirectory = Join-Path $Destination ".git"
$GitCommand = Get-Command git -ErrorAction SilentlyContinue

if ($GitCommand) {
  $GitExecutable = $GitCommand.Source
} else {
  $BundledGit = Join-Path $env:USERPROFILE ".cache\codex-runtimes\codex-primary-runtime\dependencies\native\git\cmd\git.exe"
  if (-not (Test-Path -LiteralPath $BundledGit)) {
    throw "Git was not found. Install Git or start Codex once so its bundled runtime is available."
  }
  $GitExecutable = $BundledGit
}

if (Test-Path -LiteralPath $GitDirectory) {
  & $GitExecutable -C $Destination pull --ff-only
  exit $LASTEXITCODE
}

if (Test-Path -LiteralPath $Destination) {
  $entries = Get-ChildItem -LiteralPath $Destination -Force
  if ($entries.Count -gt 0) {
    throw "Destination exists and is not an installed Git repository: $Destination"
  }
}

& $GitExecutable clone $Repository $Destination
exit $LASTEXITCODE
