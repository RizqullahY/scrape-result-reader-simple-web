@echo off
setlocal EnableDelayedExpansion

set FILE_NAME=index.html

echo.
echo ======================================
echo [INFO] Copying index.html to folders
echo ======================================

for /d /r %%D in (*) do (
    echo [COPY] %%D
    copy "%FILE_NAME%" "%%D\" >nul
)

echo.
echo ======================================
echo [DONE] index.html copied successfully
echo ======================================
pause
