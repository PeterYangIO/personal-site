<?php
session_start();
require($_SERVER["DOCUMENT_ROOT"] . "/src/App.php");

$is_v3 = $_GET["v"] === "3";

if ($is_v3) {
    $data = json_decode(file_get_contents("php://input"));
    $from = $data->from;
    $email = $data->email;
    $subject = $data->subject;
    $message = $data->message;
    $recaptcha = $data->{"g-recaptcha-response"};
}
else {
    $from = $_POST["from"];
    $email = $_POST["email"];
    $subject = $_POST["subject"];
    $message = $_POST["message"];
    $recaptcha = $_POST["g-recaptcha-response"];
}

$message = "Message from $from ($email):\n\n" . $message;

// captcha verification
$ch = curl_init("https://www.google.com/recaptcha/api/siteverify");
curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
curl_setopt($ch, CURLOPT_POST, true);
curl_setopt($ch, CURLOPT_POSTFIELDS, [
    "secret" => $is_v3 ? RECAPTCHA_SECRET : RECAPTCHA_SECRET_V3,
    "response" => $recaptcha,
    "remoteip" => $_SERVER["REMOTE_ADDR"]
]);

$cr = curl_exec($ch);
curl_close($ch);

$crd = json_decode($cr);

if ($crd === null || !$crd->success) {
    $_SESSION["flash"] = "A verification error occurred";
    http_response_code(403);
} else {
    App::sendEmail(MAIL_RECEIVER, $subject, $message);
    $_SESSION["flash"] = "Sent!";
    http_response_code(200);
}

if (!$is_v3) {
    header("Location: /");
}