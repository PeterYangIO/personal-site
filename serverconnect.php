<?php
require("secret.php");
$mysql = new mysqli(SERVERNAME, USERNAME, PASSWORD);

if ($mysql->connect_error)
    die("Connection to the server failed " . $mysql->connect_error);

if (!$mysql->select_db("database"))
    echo "Failed to select the database";