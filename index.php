<?php
session_start();
require_once($_SERVER["DOCUMENT_ROOT"] . "/vendor/autoload.php");

$loader = new Twig_Loader_Filesystem($_SERVER["DOCUMENT_ROOT"] . "/templates");
$twig = new Twig_Environment($loader);

if (isset($_SESSION["flash"])) {
    $flash = $_SESSION["flash"];
    unset($_SESSION["flash"]);
}
$data = [
    "title" => "Peter Yang || Main Page",
    "flash" => isset($flash) ? $flash : null
];

echo $twig->render("index.html", $data);