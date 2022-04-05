<?php



    echo "<pre>";
   print_r($_POST);

   $name = $_POST['name'];
   $email = $_POST['email'];
   $message = $_POST['message'];


   $to = "sullivanorjiude@gmail.com";
   $subject = "New Message!";

   $body = "";

   $body .= "From: ".$name. "\r\n";
   $body .= "Email: ".$email. "\r\n";
   $body .= "Message: ".$message. "\r\n";

   mail($to,$subject,$body);

   

    echo "</pre>";
?> 