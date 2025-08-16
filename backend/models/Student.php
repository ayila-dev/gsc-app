<?php
// models/Student.php
require_once __DIR__ . "/../core/Model.php";

class Student extends Model {
    protected $table = "students";

    public function create($data) {
        $query = "INSERT INTO students (id_user, id_year, id_center, id_cycle, id_class, id_serie, date_birth)
                  VALUES (:id_user, :id_year, :id_center, :id_cycle, :id_class, :id_serie, :date_birth)";
        $stmt = $this->conn->prepare($query);

        return $stmt->execute([
            ":id_user" => $data["id_user"],
            ":id_year" => $data["id_year"],
            ":id_center" => $data["id_center"],
            ":id_cycle" => $data["id_cycle"],
            ":id_class" => $data["id_class"],
            ":id_serie" => $data["id_serie"],
            ":date_birth" => $data["date_birth"]
        ]);
    }
}

