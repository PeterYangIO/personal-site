<?php

require_once($_SERVER["DOCUMENT_ROOT"] . "/secret.php");
class Database
{
    public function __construct() {
        $mysql = new mysqli(SERVERNAME, USERNAME,
            PASSWORD, DATABASE);

        if ($mysql->connect_error || !$mysql->select_db(DATABASE)) {
            echo("Failed to connect to the database");
            $this->db = null;
        }
        else {
            $this->db = $mysql;
        }
    }

    /**
     * @param $short
     * @return array|null
     */
    public function selectShortLinks($short) {
        $data = [];

        $query = $this->db->prepare("SELECT title, image, description, link FROM short_links WHERE short=?");

        if (!$query || $query->execute()) return null;

        $query->bind_result($title, $image, $description, $link);
        while ($query->fetch()) {
            $data[] = [
                "title" => $title,
                "image" => $image,
                "description" => $description,
                "link" => $link
            ];
        }
        $query->close();

        return $data;
    }
}