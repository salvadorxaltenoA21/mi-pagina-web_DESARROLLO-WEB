<?php
include 'conexion.php';

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $correo = $_POST['correo'];
    $password = $_POST['password'];

    $sql = "SELECT * FROM usuarios WHERE correo = ?";
    $stmt = $conn->prepare($sql);
    $stmt->bind_param("s", $correo);
    $stmt->execute();
    $resultado = $stmt->get_result();
    $usuario = $resultado->fetch_assoc();

    if ($usuario && password_verify($password, $usuario['password'])) {
        echo "Bienvenido, " . $usuario['nombre'] . ". <a href='../index.html'>Volver</a>";
    } else {
        echo "Correo o contraseña incorrectos. <a href='../index.html'>Volver</a>";
    }

    $stmt->close();
    $conn->close();
}
?>
