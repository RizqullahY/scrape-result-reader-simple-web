@echo off
setlocal EnableDelayedExpansion

set FILE_NAME=index.html
set RAW_URL=https://raw.githubusercontent.com/RizqullahY/scrape-result-reader-simple-web/master/dist/index.html

echo ======================================
echo [INFO] Downloading HTML from CDN
echo ======================================
powershell -Command "Invoke-WebRequest '%RAW_URL%' -OutFile '%FILE_NAME%'"

if not exist "%FILE_NAME%" (
    echo [ERROR] Download failed!
    pause
    exit /b
)

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
