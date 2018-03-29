<style>
@-webkit-keyframes rotating /* Safari and Chrome */ {
  from {
    -webkit-transform: rotate(0deg);
    -o-transform: rotate(0deg);
    transform: rotate(0deg);
  }
  to {
    -webkit-transform: rotate(360deg);
    -o-transform: rotate(360deg);
    transform: rotate(360deg);
  }
}
@keyframes rotating {
  from {
    -ms-transform: rotate(0deg);
    -moz-transform: rotate(0deg);
    -webkit-transform: rotate(0deg);
    -o-transform: rotate(0deg);
    transform: rotate(0deg);
  }
  to {
    -ms-transform: rotate(360deg);
    -moz-transform: rotate(360deg);
    -webkit-transform: rotate(360deg);
    -o-transform: rotate(360deg);
    transform: rotate(360deg);
  }
}
.rotating {
  -webkit-animation: rotating 2s linear infinite;
  -moz-animation: rotating 2s linear infinite;
  -ms-animation: rotating 2s linear infinite;
  -o-animation: rotating 2s linear infinite;
  animation: rotating 2s linear infinite;
}    

.loading {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 99999999;
    width: 100%;
    height: 100vh;
    
    background: #D5D5D5 url("assets/images/grey-background.jpg") no-repeat 50% 50%;
    background-size: cover;
    
    overflow-y: scroll;
    overflow-x: hidden;
}

.loading h2 {
    text-align: center;
}

.loading .rotating {
    margin: 0 auto;
    display: block;
    max-width: 100%;
}
</style>

<?php
    include_once "templates/head-template.php";
    include_once "templates/header-template.php";
?>

<?php 
    
    if($actualLinkNoHttp != "/") {
        ?>
            <div class="backToHomepage">
                <div class="backToHomepageInner">
                    <div class="backToHomepageContent">
                        <a href="/" class="linkBackToHomepage">Back to homepage</a> <i class="fa fa-arrow-right" aria-hidden="true"></i>
                    </div>
                </div>
            </div>  
        <?php
    }

    include $views; 

?>

<?php
    include_once "templates/footer-template.php";
?>