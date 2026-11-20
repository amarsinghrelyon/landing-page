<?php

if($_SERVER["REQUEST_METHOD"]=="POST"){

$name = $_POST['name'];
$email = $_POST['email'];
$phone = $_POST['phone'];
$message = $_POST['message'];

$to = "amarsingh1asm@gmail.com";   // change your mail

$subject = "New Landing Page Lead";

$body = "
New Lead Received:

Name: $name
Email: $email
Phone: $phone
Message: $message
";

$headers = "From: noreply@toptechglobal.in";

if(mail($to,$subject,$body,$headers)){
echo "Thank You! Form Submitted Successfully.";
}else{
echo "Mail Failed.";
}

}

?>