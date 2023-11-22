let intervaloTiempo;
let Pre1 = document.getElementById("Pre1").textContent;
let Pre2 = document.getElementById("Pre2").textContent;
let Pre3 = document.getElementById("Pre3").textContent;

function Comienzo() {
    intervaloTiempo = setInterval(tictac, 1000);
}

function Comenzar() {
    // Obtener el valor del input con id "num"
    let num = document.getElementById("num").value;
    // Convertir el valor del input a un número y asignarlo a tiempoRestante
    let tiempoRestante = parseInt(num);
    // Comprobar si tiempoRestante es un número válido
    if (!isNaN(tiempoRestante) && tiempoRestante > 0) {
        // Iniciar el temporizador solo si se proporciona un número válido
        Comienzo();
    } else {
        alert("Por favor, ingrese un número válido mayor que 0.");
    }
}

function tictac() {
    // Decrementar el tiempo restante
    tiempoRestante--;
    // Actualizar el valor del input con id "num"
    document.getElementById("num").value = tiempoRestante;
    // Actualizar el texto en el elemento con id "tiempo"
    document.getElementById("tiempo").textContent = tiempoRestante;
    if (tiempoRestante <= 0) {
        tiempoCumplido();
    }
}

function tiempoCumplido() {
    clearInterval(intervaloTiempo);
    document.getElementById("tiempo").textContent = 0;
    alert("Tiempo Terminado");
    Enviar();
}

function Enviar() {
    clearTimeout(tiempoRestante); // Esto no es necesario, elimínalo
    clearInterval(intervaloTiempo);
    let fecha = new Date();
    let Re1 = document.getElementById("Re1").value;
    let Re2 = document.getElementById("Re2").value;
    let Re3 = document.getElementById("Re3").value;
    let mensaje =
        fecha.toLocaleDateString("es-Es") + "\n" +
        Pre1 + " " + Re1 + "\n" +
        Pre2 + " " + Re2 + "\n" +
        Pre3 + " " + Re3;
    alert(mensaje);
}

function Reiniciar() {
    location.reload();
}
