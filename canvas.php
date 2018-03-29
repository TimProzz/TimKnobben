<?php
    include_once "inc/package.inc.php";

    $views = "views/canvas.php";
?>

<?php 

    //echo $_GET['name'];
    //echo $_GET['score'];

    if(isset($_GET['name']) && isset($_GET['score']) && isset($_GET['timeAlive']) && isset($_GET['timeInSec'])) {
        ?>
        <script>
        if(localStorage.getItem("submitScore") == 1) {
            localStorage.setItem("submitScore", 0);
        </script>
        <?php
            $name = $_GET['name'];
            $score = $_GET['score'];
            $timeAlive = $_GET['timeAlive'];
            $timeInSec = $_GET['timeInSec'];

            $sql1 = "INSERT INTO highscores (name, score, timeAlive, timeInSec) VALUES ('$name', '$score', '$timeAlive', '$timeInSec')";
            $query3 = $connectie->prepare($sql1);
            $query3->execute(array(':name'=>$name, ':score'=>$score, ':timeAlive'=>$timeAlive, ':timeInSec'=>$timeInSec));
            unset($_GET['name']);
            unset($_GET['score']);
            unset($_GET['timeAlive']);
            unset($_GET['timeInSec']);
            header('location: canvas.php');
        ?>
        <script>
        }
        </script>
        <?php
    }

?>  

<?php

    include $template;

?>