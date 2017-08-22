<?php
require("Database.php");
require_once($_SERVER["DOCUMENT_ROOT"] . "/vendor/autoload.php");

class LinkShortener
{
    function __construct()
    {
        $this->db = new Database();
    }

    public function get_links() {
        $links = $this->db->selectShortLinks();

        $loader = new Twig_Loader_Filesystem($_SERVER["DOCUMENT_ROOT"] . "/templates");
        $twig = new Twig_Environment($loader);

        $data = [
            "links" => $links
        ];

        echo $twig->render("shortpanel.html", $data);

    }

    public function post_addLink(string $link, string $short) {
        if (self::createShortLink($short, $link))
            echo("Link added successfully");
        else
            echo("Link already exists");

        // TODO front end
    }

    public function post_delete(string $short) {
        $this->db->deleteShortLink($short);

        // TODO front end
        echo("Link deleted");
    }

    public function post_showEdit(string $short) {

        $edit = $this->db->selectShortLink($short);

        $loader = new Twig_Loader_Filesystem($_SERVER["DOCUMENT_ROOT"] . "/templates");
        $twig = new Twig_Environment($loader);

        $edit = array_merge(
            $edit, // ["title", "image", "description", "link"]
            ["short" => $short]
        );

        $data = ["edit" => $edit];

        echo $twig->render("shortpanel.html", $data);
    }

    public function post_updateLink(string $title, string $image, string $desc,
                                    string $oldShort, string $newShort, string $link) {
        $ogs = [
            "title" => $title,
            "image" => $image,
            "description" => $desc
        ];

        $this->db->updateShortLink($oldShort, $ogs, $newShort, $link);

        // TODO front end
        echo("updated link");
    }

    /**
     * @param string $short
     * @param string $link
     * @return bool success
     */
    private function createShortLink(string $short, string $link){
        $scrapeData = self::scrapeLink($link);
        $scrapeData = self::cleanScrapeData($scrapeData, $link);
        return $this->db->insertShortLink($scrapeData, $short, $link);
    }

    /**
     * @param string $link
     * @return array containing og data
     */
    private static function scrapeLink(string $link){
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
    private static function cleanScrapeData(array $scrapeData, string $link){
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
}