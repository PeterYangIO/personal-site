<?php
require("serverconnect.php");
require_once($_SERVER["DOCUMENT_ROOT"] . "/vendor/autoload.php");

/**
    .htaccess says
        RewriteRule ^(.*)$ /short.php?val=$1
    val is used as the main key for matching to full link and data in database
*/
$short = $mysql->escape_string($_GET["val"]);
$query = $mysql->prepare("SELECT title, image, description, link FROM linkTable WHERE short=?");
$query->bind_param("s", $short);
$query->execute();
$query->bind_result($title, $image, $description, $link);

if ($link) {
    $title = htmlspecialchars($title, ENT_QUOTES);
    $image = htmlspecialchars($image, ENT_QUOTES);
    $description = htmlspecialchars($description, ENT_QUOTES);
    $link = htmlspecialchars($link, ENT_QUOTES);
}

$loader = new Twig_Loader_Filesystem($_SERVER["DOCUMENT_ROOT"] . "/templates");
$twig = new Twig_Environment($loader);

$data = [
    "link" => isset($link) ? $link : false,
    "title" => isset($title) ? $title : null,
    "url" => $_SERVER["HTTP_HOST"] . "/$short",
    "image" => isset($image) ? $image : null,
    "description" => isset($description) ? $description : null,
    "404" => $_SERVER["HTTP_HOST"] . "/404.php"
];

echo $twig->render("short.html", $data);