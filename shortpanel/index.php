<?php
require("../LinkShortener.php");

$ls = new LinkShortener();

if ($_SERVER["REQUEST_METHOD"] == "GET") {
    $ls->get_links();
}
else if ($_SERVER["REQUEST_METHOD"] == "POST") {
    if (isset($_POST["link"])) {
        $ls->post_addLink($_POST["link"], $_POST["short"]);
    }
    else if (isset($_POST["delete"])) {
        $ls->post_delete($_POST["delete"]);
    }
    else if (isset($_POST["editRequest"])) {
        $ls->post_editRequest($_POST["editRequest"]);
    }
    else if (isset($_POST["newLink"])) {
        $ls->post_updateLink(
            $_POST["title"],
            $_POST["image"],
            $_POST["desc"],
            $_POST["oldShort"],
            $_POST["newShort"],
            $_POST["newLink"]
        );
    }
}
else {
    echo("Method not allowed");
}