//lo que vamos a ser es obtener informacion del evento
//event va a pasar como parametro dentro de la funcion
function Evento(event){
       alert(event.target) 
       // lo que va event.target es mostrar cual es el obejetivo del evento
       //Muestra este mensaje HTMLButtonElement
       // lo que pasa es el evento esa asociado a un button en el docuemnto html 
       alert(event.currentTarget)
       // aqui se se muestra el evento donde esta asociado el evento objeto es decir el boton esta dento de un div
       //el boton es el objetivo del evento pero como esta asiciado a un div 
       //HTMLDivElement
}
function evitar(event){
    //con esta funcion lo que va a pasar es que no se puede abrir el enlace del link
  event.preventDefault();
  alert("Enlace no habilitado")
}
//document.getElementById("Miboton").addEventListener("click",Evento)
document.getElementById("miDiv").addEventListener("click",Evento)
document.getElementById("enlace").addEventListener("click",evitar)