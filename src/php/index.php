<?php
$name = $_POST['name'];
$email = $_POST['email'];
$message = $_POST['message'];

define('RECIVER_MAIL', 'johndoe@mail.com');
define('SUBJECT', 'Modest Contact Form');

if (!preg_match('/\w+@\w+\.\w+/', $email)) {
    die("Invalid E-mail");
}

$mailMessage = sprintf('Message from %s, %s: <br> %s', $name, $email, $message);


$success = mail( RECIVER_MAIL, SUBJECT, $mailMessage );

if ($success) {
    echo "E-mail sends successfully!";
} else {
    echo "coś się odjanuszyło";
}