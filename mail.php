<?php 
    $to = "turnbull.sydney@gmail.com"; // this is your Email address
    $from = $_POST['mail']; // this is the sender's Email address
    $name = $_POST['name'];
    $subject = "Incoming from your personal website!";
    $comment = $name . " at  " . $from . " says: " . "\n\n" . $_POST['comment'];

    mail($to,$subject,$comment);
    header('Location: ContactMe.html');
?>
