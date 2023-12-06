// Capturar el elemento de entrada con el id "ingreso"
let campo = document.getElementById("ingreso");

// Crear la función que solo mostrará números en el input
function verificar(event) {
    // Verificar si la tecla presionada tiene un código ASCII menor que 48 o mayor que 57
    if (event.keyCode < 48 || event.keyCode > 57) {
        // Si es así, prevenir la acción predeterminada (es decir, evitar que se ingrese la tecla)
        event.preventDefault();
    }
}

// Adjuntar el listener de eventos "keydown" al campo de entrada, llamando a la función verificar
campo.addEventListener("keydown", verificar);
// Listener para el evento "keyup"
campo.addEventListener("keyup", function(event) {
    // Imprimir en la consola la entrada actual del usuario después de soltar la tecla
    console.log("Entrada de Usuario: " + event.target.value);
});

// Listener para el evento "keypress"
campo.addEventListener("keypress", function(event) {
    // Imprimir en la consola el carácter que se ha ingresado
    console.log("Caracter Ingresado: " + event.key);
});