<?php
$servername = "bgnwbezv162rppz88e7e-mysql.services.clever-cloud.com";  // Cambiar por tu servidor MySQL
$username = "usjzyvhsmzwuhjfa";         // Cambiar por tu usuario MySQL
$password = "zVJqTkPlVTGLfwARYGfX";             // Cambiar por tu contraseña MySQL
$dbname = "bgnwbezv162rppz88e7e";     // Nombre de tu base de datos

try {
    $conn = new PDO("mysql:host=$servername;dbname=$dbname", $username, $password);
    $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
} catch(PDOException $e) {
    echo "Connection failed: " . $e->getMessage();
}
?>
