- Problem: 

PDOException SQLSTATE[HY000] [2002] No such file or directory

Fixed: 
URL: https://stackoverflow.com/questions/20723803/pdoexception-sqlstatehy000-2002-no-such-file-or-directory

Add the socket to the .env and config/database.php
'/Applications/MAMP/tmp/mysql/mysql.sock'
DB_SOCKET=/Applications/MAMP/tmp/mysql/mysql.sock

