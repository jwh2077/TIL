@echo off
setlocal
cd /d "%~dp0"
set "TIL_NODE="
for /f "delims=" %%N in ('where node.exe 2^>nul') do if not defined TIL_NODE set "TIL_NODE=%%N"
if not defined TIL_NODE if exist "%USERPROFILE%\.cache\codex-runtimes\codex-primary-runtime\dependencies\node\bin\node.exe" set "TIL_NODE=%USERPROFILE%\.cache\codex-runtimes\codex-primary-runtime\dependencies\node\bin\node.exe"
if not defined TIL_NODE (
  echo Node.js 22 or later is required. Install it, then run this file again.
  pause
  exit /b 1
)
"%TIL_NODE%" -e "if(Number(process.versions.node.split('.')[0])<22)process.exit(1)"
if errorlevel 1 (
  echo Node.js 22 or later is required. Update it, then try again.
  if "%~1"=="" pause
  exit /b 1
)
"%TIL_NODE%" "%~dp0tools\setup-local.cjs" %*
set "TIL_RESULT=%ERRORLEVEL%"
if "%~1"=="" pause
exit /b %TIL_RESULT%
