//aqui se establece la conexion con un servidor socket el cual sirve para el chat en vivo

let socket = new WebSocket("wss://socketsbay.com/wss/v2/1/demo/")
//capturar 
let Formulario = document.getElementById("Formulario")
let boton= document.getElementById("Boton")
//creacion de la funcion para asignar el div el mensaje enviado 
function Mensajes(contenido){
    //aqui se captura el div del html
    let registro= document.getElementById("Registro")
    //se crea un elemento parrafo para los mensajes
    let parrafo= document.createElement("p")
    //se asigna el parrafo al contenido que va a tener
    parrafo.innerText=contenido;
    //y aqui se asigna al hijo del registro
    registro.appendChild(parrafo)
}
boton.onclick= function(){
    //aqui se captura el valor del input
    let mensaje = document.getElementById("Mensaje").value;
    //aqui se envie el mensaje capturado a travez de la funcion previmanente creada
    Mensajes(mensaje)
    //aqui se envia el mensaje en el socket
    socket.send(mensaje)

}
//aqui se recibe lo del remitente
socket.onmessage= function (event){
    //se crea una funcion que capture el mensaje del remitente y a su vez que se impira en el div
    let mensaje= event.data;
    Mensajes(mensaje)

}