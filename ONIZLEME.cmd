@echo off
setlocal
cd /d "%~dp0"
set "BASKAN_NODE=node"
where node >nul 2>nul
if errorlevel 1 set "BASKAN_NODE=%USERPROFILE%\.cache\codex-runtimes\codex-primary-runtime\dependencies\node\bin\node.exe"
"%BASKAN_NODE%" preview.cjs
pause
