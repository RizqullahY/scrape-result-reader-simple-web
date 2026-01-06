@echo off
setlocal

set FILE_NAME=index-website.html
set RAW_URL=https://raw.githubusercontent.com/RizqullahY/scrape-result-reader-simple-web/master/dist/index.html

echo Downloading HTML...
powershell -Command "Invoke-WebRequest '%RAW_URL%' -OutFile '%FILE_NAME%'"

if not exist "%FILE_NAME%" (
    echo Failed.
    pause
    exit /b
)

echo Copy...

for /d /r %%D in (*) do (
    copy "%FILE_NAME%" "%%D\" >nul
)

echo.
echo Done.
pause
