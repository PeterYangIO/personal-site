<?php
session_start();
require($_SERVER["DOCUMENT_ROOT"] . "src/App.php");

$from = $_POST["from"];
$email = $_POST["email"];
$subject = $_POST["subject"];
$message = $_POST["message"];
$message = "Message from $from ($email):\n\n" . $message;

// captcha verification
$ch = curl_init("https://www.google.com/recaptcha/api/siteverify");
curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
curl_setopt($ch, CURLOPT_POST, true);
curl_setopt($ch, CURLOPT_POSTFIELDS, [
    "secret" => RECAPTCHA_SECRET,
    "response" => $_POST["g-recaptcha-response"],
    "remoteip" => $_SERVER["REMOTE_ADDR"]
]);

$cr = curl_exec($ch);
curl_close($ch);

$crd = json_decode($cr);

if ($crd === null || !$crd->success) {
    $_SESSION["flash"] = "A verification error occurred";
} else {
    App::sendEmail(MAIL_RECEIVER, $subject, $message);
    $_SESSION["flash"] = "Sent!";
}
 header("Location: /");