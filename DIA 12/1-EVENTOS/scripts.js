let boton= document.getElementById("boton");
//creacion de una function para mostrar por un alert un mensaje
function MensajeAlerta(){
    alert("Haz dado click")
}//creacion de una funcion para que cuando se pase el mouse por el boton muestre un alert
function MousePasa(){
    alert("Haz pasado tu mouse por el boton")
}
//creacion de eventos
//primero se pone el nombre de la variable obtenida
//segundo se pone un "." de la funcion que va a ocurrir un evento addEventListener 
//se especifica que tipo de evento va a ser luego se pone o se crea una funcion no es necesario poner los ()
boton.addEventListener("click",MensajeAlerta)
boton.addEventListener("mouseover", MousePasa)