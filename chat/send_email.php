<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $nombre = $_POST["nombre"];
    $email = $_POST["email"];
    $asunto = $_POST["asunto"];
    $mensaje = $_POST["mensaje"];

    // Configura la dirección de correo a la que se enviarán los datos
    $destinatario = "poesiaycomunicacion@gmail.com";

    // Crea el mensaje que se enviará por correo
    $contenido = "Nombre: $nombre\n";
    $contenido .= "Email: $email\n";
    $contenido .= "Asunto: $asunto\n";
    $contenido .= "Mensaje:\n$mensaje\n";

    // Envía el correo
    mail($destinatario, "Nuevo mensaje desde el formulario de contacto", $contenido);

    // Redirige al usuario a una página de confirmación
    header("Location: email.html");
    exit;
}
?>