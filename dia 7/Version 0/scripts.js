function ExtraerNumero(numero){
    let minumero= document.getElementById(numero).value;
    minumero= Number(minumero);
    return minumero

}

function Calcular(){
    let ventas1,ventas2, ventas3, ventas4, ventas5, ventas6;
    ventas1= ExtraerNumero("VentasTIENDA1");
    ventas2= ExtraerNumero("VentasTIENDA2");
    ventas3= ExtraerNumero("VentasTIENDA3");
    ventas4= ExtraerNumero("VentasTIENDA4");
    ventas5= ExtraerNumero("VentasTIENDA5");
    ventas6= ExtraerNumero("VentasTIENDA6");

    let total= ventas1+ventas2+ventas3+ventas4+ventas5+ventas6
    let mensaje= "El total de ventas es : "+ total
    document.getElementById("Salida").textContent=mensaje;



}