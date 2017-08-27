<?php

require_once("secret.php");
require_once($_SERVER["DOCUMENT_ROOT"] . "/vendor/autoload.php");
use Mailgun\Mailgun;

class App
{
    /**
     * Sends an email using the MailGun API.
     * Users will receive an email from the email account specified by WEBUSER
     *
     * @param string $to
     * @param string $subject
     * @param string $message
     */
    public static function sendEmail(string $to, string $subject, string $message) {
        $mailgun = new Mailgun(MAILGUN_KEY);

        $domain = "pya.ng";
        $mailgun->sendMessage($domain, [
            "from" => WEBUSER,
            "to" => $to,
            "subject" => $subject,
            "text" => $message
        ]);
    }
}