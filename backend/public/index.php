<?php
// public/index.php
session_start();
require_once __DIR__ . "/../config/Database.php";
require_once __DIR__ . "/../controllers/AuthController.php";

$db = (new Database())->getConnection();
$auth = new AuthController($db);

// Exemple : login d’un user
if ($auth->login("alice.dupont@example.com")) {
    echo "Connecté en tant que " . $_SESSION["user"]["firstname"];
    print_r($_SESSION["permissions"]);
} else {
    echo "Échec de connexion.";
}

