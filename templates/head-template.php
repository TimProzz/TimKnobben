<html>
    <head>
        <!-- Global site tag (gtag.js) - Google Analytics -->
        <script async src="https://www.googletagmanager.com/gtag/js?id=UA-115875423-3"></script>
        <script>
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', 'UA-115875423-3');
        </script>

        <meta name="description" content="Tim Knobben | Web and software developer - Website made by Tim Knobben - Portfolio website - A young and original web developer">

        <meta charset="utf-8" />

        <meta name="keywords" content="Tim Knobben, web, webdeveloper, web developer, software, developer, portfolio, website, Tim, Knobben, projects, canvas, game, design, Nijverdal"/>
        
        <meta name="viewport" content="width=device-width,initial-scale=1.0">
        
        <meta http-equiv="cache-control" content="no-cache">

        <meta name="theme-color" content="#44a9e2">
        
        <title>Tim Knobben | Web and software developer</title>
        <link rel="icon" type="image/png" href="assets/images/logo-icon.png?">
        <link rel="apple-touch-icon" type="image/png" sizes="128x128" href="assets/images/logo-icon-128x128.png">
	<link rel="icon" type="image/png" sizes="192x192" href="assets/images/logo-icon-192x192.png">
        
        <!--<script src="https://ajax.googleapis.com/ajax/libs/jquery/1.6.2/jquery.min.js"></script>-->
        <!--<script src="https://code.jquery.com/jquery-2.2.4.js" integrity="sha256-iT6Q9iMJYuQiMWNd9lDyBUStIq/8PuOW33aOqmvFpqI=" crossorigin="anonymous"></script>-->
        <script src="https://code.jquery.com/jquery-3.3.1.js" integrity="sha256-2Kok7MbOyxpgUVvAk/HJ2jigOSYS2auK4Pfzbm7uH60=" crossorigin="anonymous"></script>
		
        <link href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" rel="stylesheet" integrity="sha384-wvfXpqpZZVQGK6TAh5PVlGOfQNHSoD2xbE+QkPxCAFlNEevoEH3Sl0sibVcOQVnN" crossorigin="anonymous">
        
        <script src='https://www.google.com/recaptcha/api.js'></script>
        <!-- PLUGINS -->
        <script type="text/javascript" src="assets/jquery.smoothwheel.js"></script>
        <script type="text/javascript" src="assets/jquery.enllax.js"></script>
        <script type="text/javascript" src="assets/wow.min.js"></script>
        <script type="text/javascript" src="assets/typed.js"></script>
        <link rel="stylesheet"
  href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.5.2/animate.min.css"
  integrity="sha384-OHBBOqpYHNsIqQy8hL1U+8OXf9hH6QRxi0+EODezv82DfnZoV7qoHAZDwMwEJvSw"
  crossorigin="anonymous">
        <link rel="stylesheet" href="assets/hover.css" type="text/css"/>
        <link rel="stylesheet" href="assets/main.css?v=1.0.0" type="text/css"/>
        <script type="text/javascript" src="assets/main.js?v=1.0.0"></script>
    </head>
    <body>
        <div class="loading">
            <h2>LOADING...</h2>
            <img src="assets/images/load-icon.png" class="rotating" alt="load-icon" />
        </div>
     
        <?php
        if(isset($_GET["error"])) {
            $errorMessageError = $_GET["error"];
            ?><div class="noJavascript errorMessage errorMessageColorRed">
                <?php echo $errorMessageError; ?>
                <div class="kruisje">X</div>
            </div>
        <?php
        }

        if(isset($_GET["success"])) {
            $errorMessageSuccess = $_GET["success"];
            ?><div class="noJavascript errorMessage errorMessageColorGreen">
                <?php echo $errorMessageSuccess; ?>
                <div class="kruisje">X</div>
            </div>
        <?php 
        }
        ?>