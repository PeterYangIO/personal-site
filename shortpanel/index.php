<?php
require("../LinkShortener.php");

$ls = new LinkShortener();

if ($_SERVER["REQUEST_METHOD"] == "GET") {
    $ls->get_links();
}
else if ($_SERVER["REQUEST_METHOD"] == "POST") {
    switch ($_POST["method"]) {
        case "add":
            $ls->post_addLink($_POST["link"], $_POST["short"]);
            break;
        case "delete":
            $ls->post_delete($_POST["delete"]);
            break;
        case "showEdit":
            $ls->post_showEdit($_POST["short"]);
            break;
        case "doEdit":
            $ls->post_updateLink(
                $_POST["title"],
                $_POST["image"],
                $_POST["desc"],
                $_POST["oldShort"],
                $_POST["newShort"],
                $_POST["newLink"]
            );
            break;
        default:
            echo("Bad method");
    }
}
else {
    echo("Method not allowed");
}