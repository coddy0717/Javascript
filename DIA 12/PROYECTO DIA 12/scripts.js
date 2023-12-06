// Capturar los elementos HTML
// Capturar selector
let selector = document.getElementById("miSelector");
// Capturar input
let input = document.getElementById("miInput");
// Capturar lista
let lista = document.getElementById("miListado");
// Capturar botón
let boton = document.getElementById("miBoton");

// Creación de un archivo que contiene el JSON
let archivo = "peliculas.json";

// Creación de un evento que cambia el selector
selector.addEventListener("change", cambio);
// Evento para mostrar en pantalla que archivo JSON se ha escogido
selector.addEventListener("cambiomodo", mensaje);
// Selector que verifica el input para que solo se ingresen números
input.addEventListener("keydown", verificar);
boton.addEventListener('click', buscar);

// Función que se ejecuta cuando se cambia el selector
function cambio() {
    archivo = selector.value;
    // Creación de un evento nuevo
    let evento = new CustomEvent("cambiomodo");
    selector.dispatchEvent(evento);
}

// Función que muestra un mensaje al cambiar el modo
function mensaje() {
    alert("La sección ha cambiado a " + selector.value);
}

// Función que verifica que solo se ingresen números en el input
function verificar(evento) {
    if ((evento.keyCode < 65 || evento.keyCode > 90) && evento.keyCode !== 32 && evento.keyCode !== 8) {
        evento.preventDefault();
    }
}

// Función que se ejecuta al hacer clic en el botón
function buscar() {
    lista.innerHTML = "";

    fetch(archivo)
        .then(respuesta => respuesta.json())
        .then(function (salida) {
            for (let item of salida.data) {
                if (item.nombre.startsWith(input.value.toUpperCase())) {
                    let p = document.createElement('p');
                    p.id = item.nombre;
                    p.innerHTML = item.sinopsis;
                    p.style.display = "none";

                    let li = document.createElement('li');
                    li.innerHTML = item.nombre;

                    // Eventos de ratón para mostrar/ocultar la sinopsis al pasar sobre el elemento de la lista
                    li.addEventListener('mouseover', function () {
                        let p = document.getElementById(item.nombre);
                        p.style.display = 'block';
                    });

                    li.addEventListener('mouseout', function () {
                        let p = document.getElementById(item.nombre);
                        p.style.display = 'none';
                    });

                    li.appendChild(p);
                    lista.appendChild(li);
                }
            }
        })
        .catch(function (error) {
            console.log(error);
        });
}
