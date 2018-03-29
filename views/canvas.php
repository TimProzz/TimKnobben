<div class="main-container backgroundColorLittleGrey">
    <div class="paddingLeftRight">
        <div class="main-content">  
            <h2>Canvas game: Dodge 'n Score!</h2>
            <p>This is my self-made game called <strong>Dodge 'n Score</strong>! The game is made with the HTML element called 'canvas' and is being run by Javascript.<br><br>Explanation: Try to avoid all the defenders and score as many goals as you can! Get as many points as possible and unlock all the achievements!</p>
            
            <?php 
            if($mobileShowAnimation != "") {
                ?><script type="text/javascript" src="assets/canvas.js"></script><canvas id="canvas" width="1300" height="600"></canvas><?php
            } else {
                ?><img src="assets/images/gamecanvas.png" alt="canvasImg" style="max-width: 100%;" /><strong>Sorry</strong>, this canvas game is only available on computers and laptops! Please view this page on a computer or desktop!<?php
            }
            ?>
            <h2>All highscores:</h2>
            <?php

            ?>
            <h3>Filter on:</h3>

            <form id="radio_form">                    
                <input type="radio" id="r1" name="scoreOrTime" value="score" checked> Score<br>
                <input type="radio" id="r2" name="scoreOrTime" value="timeInSec"> Time Alive<br>
            </form>          
            <script>

                $("#radio_form input[type=radio]").change(function () {
                    if($('#r1').is(':checked')) { 
                        $("#score").css("display", "block"); 
                        $("#timeInSec").css("display", "none"); 
                    }
                    if($('#r2').is(':checked')) { 
                        $("#score").css("display", "none"); 
                        $("#timeInSec").css("display", "block");
                    }
                });

                //function radio_form(){
                    //var rate_value = $('#r1').value;
                    //console.log(rate_value);
                //}

            </script>

            <?php
                    $query1 = $connectie->prepare("SELECT * FROM `highscores` ORDER BY `highscores`.`score` DESC");
                    $query1->execute();
                    $count1 = $query1->rowCount();

                    $query2 = $connectie->prepare("SELECT * FROM `highscores` ORDER BY `highscores`.`timeInSec` DESC");
                    $query2->execute();
                    $count2 = $query2->rowCount();
            ?>
            <div id="score">
            <?php
                    $i = 1;
                    ?>
                    <table class="tableHighscores">
                            <tr>
                                <th><b>Position:</b></th>
                                <th><b>Name:</b></th>
                                <th><b>Score:</b></th>
                                <th><b>Time alive:</b></th>
                            </tr>
                    <?php
                    while ($row = $query1->fetch(PDO::FETCH_ASSOC)) {
                        ?>
                        <tr>
                            <th><b><?php echo $i; ?></b><?php echo ". "; $i++;?></th>
                            <th><?php echo $row['name'];?> </th>
                            <th><?php echo $row['score'];?> </th>
                            <th><?php echo $row['timeAlive'];?></th>
                        </tr>
                        <?php
                    }
            ?>
            </table>
            </div>
            <div id="timeInSec" style="display: none;">
            <?php
                    $s = 1;
            ?>
                    <table class="tableHighscores">
                            <tr>
                                <th><b>Position:</b></th>
                                <th><b>Name:</b></th>
                                <th><b>Score:</b></th>
                                <th><b>Time alive:</b></th>
                            </tr>
                    <?php

                    while ($row2 = $query2->fetch(PDO::FETCH_ASSOC)) {   
                        ?>
                        <tr>
                            <th><b><?php echo $s; ?></b><?php echo ". "; $s++;?></th>
                            <th><?php echo $row2['name'];?></th>
                            <th><?php echo $row2['score'];?></th>
                            <th><?php echo $row2['timeAlive'];?></th>
                        </tr>
                        <?php
                    }
            ?>
            </table>
            </div>
        </div>
    </div>
</div>