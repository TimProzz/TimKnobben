<?php
try {
    //username en wachtwoord declareren 
    $serverName = "localhost";
    $usernameDB = "root";
    $passwordDB = "";
    
    $DBName = "u29719p23510_tim1";
        $connectie = new PDO("mysql:host=$serverName;dbname=$DBName", $usernameDB, $passwordDB);
        $connectie->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
    } catch (PDOException $exception) {
        echo "Database offline/can't connect to the database<br />";
        exit;
    }
?>