attrib -r %WINDIR%\system32\drivers\etc\hosts

SET NEWLINE=^& echo.

FIND /C /I "forskippingurl" %WINDIR%\system32\drivers\etc\hosts
IF %ERRORLEVEL% NEQ 0 ECHO ^127.0.0.1                   thislineskipsanyemptylines>>%WINDIR%\system32\drivers\etc\hosts

FIND /C /I "updates.connectify.me" %WINDIR%\system32\drivers\etc\hosts
IF %ERRORLEVEL% NEQ 0 ECHO %NEWLINE%^127.0.0.1                   updates.connectify.me>>%WINDIR%\system32\drivers\etc\hosts

FIND /C /I "d.connectify.me" %WINDIR%\system32\drivers\etc\hosts
IF %ERRORLEVEL% NEQ 0 ECHO %NEWLINE%^127.0.0.1                   d.connectify.me>>%WINDIR%\system32\drivers\etc\hosts

FIND /C /I "activate.connectify.me" %WINDIR%\system32\drivers\etc\hosts
IF %ERRORLEVEL% NEQ 0 ECHO ^127.0.0.1                   activate.connectify.me>>%WINDIR%\system32\drivers\etc\hosts

FIND /C /I "d1.connectify.me" %WINDIR%\system32\drivers\etc\hosts
IF %ERRORLEVEL% NEQ 0 ECHO ^127.0.0.1                   d1.connectify.me>>%WINDIR%\system32\drivers\etc\hosts

FIND /C /I "d2.connectify.me" %WINDIR%\system32\drivers\etc\hosts
IF %ERRORLEVEL% NEQ 0 ECHO ^127.0.0.1                   d2.connectify.me>>%WINDIR%\system32\drivers\etc\hosts

FIND /C /I "d3.connectify.me" %WINDIR%\system32\drivers\etc\hosts
IF %ERRORLEVEL% NEQ 0 ECHO ^127.0.0.2                   d3.connectify.me>>%WINDIR%\system32\drivers\etc\hosts

FIND /C /I "b.connectify.me" %WINDIR%\system32\drivers\etc\hosts
IF %ERRORLEVEL% NEQ 0 ECHO ^127.0.0.2                   b.connectify.me>>%WINDIR%\system32\drivers\etc\hosts

FIND /C /I "bc.connectify.me" %WINDIR%\system32\drivers\etc\hosts
IF %ERRORLEVEL% NEQ 0 ECHO ^127.0.0.2                   bc.connectify.me>>%WINDIR%\system32\drivers\etc\hosts

attrib +r %WINDIR%\system32\drivers\etc\hosts