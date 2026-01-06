@echo off
setlocal EnableDelayedExpansion

echo ======================================
echo [INFO] Deleting all .html files
echo ======================================

for /r %%F in (*.html) do (
    echo [DELETE] %%F
    del "%%F"
)

echo.
echo ======================================
echo [DONE] All .html files deleted
echo ======================================
pause
