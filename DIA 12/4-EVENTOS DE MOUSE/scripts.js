//document.getElementById("boton").addEventListener("click", function(){
    //document.getElementById("lista").style="block"
//})
//con este evento lo que se va hacer es que va mostrar la lista oculta modificando su display que estaba en none paso
//hacer en block
document.getElementById("boton").addEventListener("mouseover", function(){
    document.getElementById("lista").style.display="block"
})
//aqui cuando el mouse pase por el boton se va mostrar la lista mediante la propiedad de mouseover
// y en la segunda linea de codigo lo que se va hacer es mediante la propiedad de style.display se va acceder a la 
//propiedad css que posea la lista de none pasar a block
document.getElementById("boton").addEventListener("mouseout", function(){
    document.getElementById("lista").style.display="none"
})
document.addEventListener("mousemove", function(event){
    console.log("Posicion del eje X:" +event.movementX +" - Posicion eje Y: " + event.movementY);
    // lo que va a pasar aqui es se imprimira por consola la posicion del raton pero esto se hace capturando el documento
})
