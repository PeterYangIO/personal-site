<?php
require_once($_SERVER["DOCUMENT_ROOT"] . "/vendor/autoload.php");

$loader = new Twig_Loader_Filesystem($_SERVER["DOCUMENT_ROOT"] . "/templates");
$twig = new Twig_Environment($loader);

$data = ["title" => "Peter Yang || Music"];

echo $twig->render("music.html", $data);