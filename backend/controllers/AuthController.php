<?php
// controllers/AuthController.php
require_once __DIR__ . "/../models/User.php";

class AuthController {
    private $db;

    public function __construct($db) {
        $this->db = $db;
    }

    public function login($email) {
        $userModel = new User($this->db);
        $user = $userModel->findByEmail($email);

        if ($user) {
            // Charger les permissions du rôle
            $sql = "SELECT p.permission_key 
                    FROM role_permissions rp
                    JOIN permissions p ON rp.id_permission = p.id_permission
                    WHERE rp.id_role = ?";
            $stmt = $this->db->prepare($sql);
            $stmt->execute([$user["id_role"]]);
            $permissions = $stmt->fetchAll(PDO::FETCH_COLUMN);

            // Stocker en session
            $_SESSION["user"] = $user;
            $_SESSION["permissions"] = $permissions;

            return true;
        }
        return false;
    }
}

