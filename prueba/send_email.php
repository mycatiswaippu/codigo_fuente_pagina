<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $nombre = htmlspecialchars($_POST['nombre']);
    $email = htmlspecialchars($_POST['email']);
    $asunto = htmlspecialchars($_POST['asunto']);
    $mensaje = htmlspecialchars($_POST['mensaje']);

    $to = "contacto@poesiadelospueblos.online";
    $subject = "Nuevo mensaje de contacto: $asunto";
    $message = "
    Nombre: $nombre\n
    Email: $email\n
    Asunto: $asunto\n
    Mensaje: $mensaje\n
    ";
    $headers = "From: no-reply@yourdomain.com\r\n";
    $headers .= "Reply-To: $email\r\n";

    if (mail($to, $subject, $message, $headers)) {
        header("Location: email.html");
        exit();
    } else {
        echo "Error al enviar el mensaje.";
    }
}
?>