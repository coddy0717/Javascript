//capturar las variables
let audio =document.getElementById("audio") //variable del audio
let lista= document.getElementById("lista")//capturar el select
//creacion de un evento change que va cambiar la musica cuando el usuario la elija
lista.addEventListener("change", cambiarcancion)
function cambiarcancion(){
    //se crea una variable que contenga la cacion elegida por el usuario
    let cancion= lista.value;
    //mediante la propiedad de audio se especifica que cual es la cancion elegida  
    audio.src=cancion;
    //se reproduce la cancion 
    audio.play();
    //creacion del evento personalizado
    // con CustomEvent se establece cual es la funcion
    let evento = new CustomEvent("cambio")
    //aqui se establece que el evento que va a ocurrir
    audio.dispatchEvent(evento)
}
//se crea un evento para el cambio de la cancion 
audio.addEventListener("cambio", cambiocancion)
function cambiocancion(){
    //aqui se muestra el valor del select 
    alert("la cancion actual que esta sonando es: " + lista.value)
}
