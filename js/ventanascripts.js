// Aquí puedes agregar cualquier funcionalidad adicional con JavaScript, si es necesario.
// Por ejemplo, cerrar la ventana flotante con un botón:

document.addEventListener('DOMContentLoaded', function () {
    const floatingWindow = document.querySelector('.floating-window');

    // Añadir un botón de cerrar
    const closeButton = document.createElement('button');
    closeButton.textContent = 'Cerrar';
    closeButton.style.marginTop = '10px';
    closeButton.addEventListener('click', function () {
        floatingWindow.style.display = 'none';
    });

    floatingWindow.appendChild(closeButton);
});