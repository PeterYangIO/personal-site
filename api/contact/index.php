<?php
session_start();
require($_SERVER["DOCUMENT_ROOT"] . "/src/App.php");

// Parse form data
$data = json_decode(file_get_contents("php://input"));
$from = $data->from;
$email = $data->email;
$subject = $data->subject;
$message = $data->message;
$recaptcha = $data->{"g-recaptcha-response"};

// Build message
$message = "Message from $from ($email):\n\n" . $message;

// Captcha verification
$ch = curl_init("https://www.google.com/recaptcha/api/siteverify");
curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
curl_setopt($ch, CURLOPT_POST, true);
curl_setopt($ch, CURLOPT_POSTFIELDS, [
    "secret" => RECAPTCHA_SECRET,
    "response" => $recaptcha,
    "remoteip" => $_SERVER["REMOTE_ADDR"]
]);

$cr = curl_exec($ch);
curl_close($ch);

$crd = json_decode($cr);

// Process response based on captcha status
if ($crd === null || !$crd->success) {
    http_response_code(403);
} else {
    App::sendEmail(MAIL_RECEIVER, $subject, $message);
    http_response_code(200);
}
