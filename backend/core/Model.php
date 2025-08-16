<?php
// core/Model.php
abstract class Model {
    protected $conn;
    protected $table;

    public function __construct($db) {
        $this->conn = $db;
    }

    // Lire tout
    public function findAll() {
        $query = "SELECT * FROM " . $this->table;
        $stmt = $this->conn->prepare($query);
        $stmt->execute();
        return $stmt->fetchAll(PDO::FETCH_ASSOC);
    }

    // Lire par ID
    public function findById($id, $primaryKey = "id") {
        $query = "SELECT * FROM " . $this->table . " WHERE $primaryKey = :id";
        $stmt = $this->conn->prepare($query);
        $stmt->bindParam(":id", $id);
        $stmt->execute();
        return $stmt->fetch(PDO::FETCH_ASSOC);
    }

    // Supprimer
    public function delete($id, $primaryKey = "id") {
        $query = "DELETE FROM " . $this->table . " WHERE $primaryKey = :id";
        $stmt = $this->conn->prepare($query);
        $stmt->bindParam(":id", $id);
        return $stmt->execute();
    }
}

