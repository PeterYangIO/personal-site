<?php
require("../Database.php");
$db = new Database();

if ($_SERVER["REQUEST_METHOD"] == "GET") {
    $links = $db->selectShortLinks();

    $loader = new Twig_Loader_Filesystem($_SERVER["DOCUMENT_ROOT"] . "/templates");
    $twig = new Twig_Environment($loader);

    $data = [
        "links" => $links
    ];

    echo $twig->render("shortpanel.html", $data);
}
else if ($_SERVER["REQUEST_METHOD"] == "POST") {
    if (isset($_POST["link"])) {
        $link = $_POST["link"];
        $short = $_POST["short"];

        if (createShortLink($db, $short, $link)) {
            echo("Link added successfully");
        }
        else {
            echo("Link already exists");
        }

        unset($_POST["link"]);
        unset($_POST["short"]);

        // TODO front end
    }
    else if (isset($_POST["delete"])) {
        $db->deleteShortLink(($_POST["delete"]));
        unset($_POST["delete"]);

        // TODO front end feedback of delete
    }
    else if (isset($_POST["editRequest"])) {
        $short = $_POST["editRequest"];
        unset($_POST["editRequest"]);
        $edit = $db->selectShortLink($short);

        $loader = new Twig_Loader_Filesystem($_SERVER["DOCUMENT_ROOT"] . "/templates");
        $twig = new Twig_Environment($loader);

        $edit = array_merge(
            $edit, // ["title", "image", "description", "link"]
            ["short" => $short]
        );

        $data = [
            "edit" => $edit
        ];

        echo $twig->render("shortpanel.html", $data);
    }
    else if (isset($_POST["newTitle"])) {
        $ogs = [
            "title" => $_POST["newTitle"],
            "image" => $_POST["newImage"],
            "description" => $_POST["newDescription"]
        ];

        $oldShort = $_POST["oldShort"];
        $newShort = $_POST["newShort"];
        $newLink = $_POST["newLink"];

        $db->updateShortLink($oldShort, $ogs, $newShort, $newLink);

        unset($_POST["newTitle"]);

        // TODO front end feedback for update of new title
    }
}
else {
    echo("Method not allowed");
}

/**
 * @param string $short
 * @param string $link
 * @return bool success
 */
function createShortLink(Database $db, string $short, string $link){
    $scrapeData = scrapeLink($link);
    $scrapeData = cleanScrapeData($scrapeData, $link);
    return $db->insertShortLink($scrapeData, $short, $link);
}

/**
 * @param string $link
 * @return array containing og data
 */
function scrapeLink(string $link){
    libxml_use_internal_errors(true);
    $doc = new DomDocument();
    $doc->loadHTMLFile($link);
    $xpath = new DOMXPath($doc);
    $query = '//*/meta[starts-with(@property, \'og:\')]';
    $metas = $xpath->query($query);
    $rmetas = array();
    foreach ($metas as $meta) {
        $property = $meta->getAttribute('property');
        $content = $meta->getAttribute('content');
        $rmetas[$property] = $content;
    }
    return $rmetas;
}


/**
 * NOTE[1] -> Will convert relative image links to absolute image links
 *
 * @param array $scrapeData
 * @param string $link
 * @return array [$title, $image, $description]
 */
function cleanScrapeData(array $scrapeData, string $link){
    $newScrapeData = [
        "title" => $scrapeData["og:title"],
        "image" => $scrapeData["og:image"],
        "description" => $scrapeData["og:description"]
    ];

    // og:image is often a relative link
    // If link does not start with http, it is relative
    if (substr($newScrapeData["image"], 0, 4) !== "http"){
        $link = rtrim($link, "/");
        // Append relative link to absolute link to get full url
        $newScrapeData["image"] = $link . $newScrapeData["image"];
    }
    return $newScrapeData;
}