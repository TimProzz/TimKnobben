<?php
    include_once "inc/package.inc.php";

    if(isset($_GET["lastUrl"])) {
        $lastUrl = $_GET["lastUrl"];
    }   
?>

<?php
    function get_client_ip_server() {
        $ipaddress = '';
        if (isset($_SERVER['HTTP_CLIENT_IP']))
            $ipaddress = $_SERVER['HTTP_CLIENT_IP'];
        else if(isset($_SERVER['HTTP_X_FORWARDED_FOR']))
            $ipaddress = $_SERVER['HTTP_X_FORWARDED_FOR'];
        else if(isset($_SERVER['HTTP_X_FORWARDED']))
            $ipaddress = $_SERVER['HTTP_X_FORWARDED'];
        else if(isset($_SERVER['HTTP_FORWARDED_FOR']))
            $ipaddress = $_SERVER['HTTP_FORWARDED_FOR'];
        else if(isset($_SERVER['HTTP_FORWARDED']))
            $ipaddress = $_SERVER['HTTP_FORWARDED'];
        else if(isset($_SERVER['REMOTE_ADDR']))
            $ipaddress = $_SERVER['REMOTE_ADDR'];
        else
            $ipaddress = 'UNKNOWN';

        return $ipaddress;
    }

    if(isset($_POST["submitPost"])) {
        $userName = $_POST['persoonNaam'];
        $userEmail = $_POST['persoonEmail'];
        $userPost = $_POST['persoonPost'];
        $date = date("j F Y H:i");
        
        $ipaddress = get_client_ip_server();
        
        if($_POST["g-recaptcha-response"] == "") {
            header('location: '.$lastUrl.'?error=The reCAPTCHA was not submitted correctly. No information or data was sent. Please try again!');
            exit;
        }

        $query = $connectie->prepare("INSERT INTO comments (name, post, date, email, ip) VALUES(:name, :post, :date, :email, :ip)");
        $query->bindValue(':name', $userName);
        $query->bindValue(':post', $userPost);
        $query->bindValue(':date', $date);
        $query->bindValue(':email', $userEmail);
        $query->bindValue(':ip', $ipaddress);
        $query->execute();
        
        header('location: '.$lastUrl.'?success=Thank you for sending your message. I will try to respond as soon as possible!');
        exit;
    }
?>