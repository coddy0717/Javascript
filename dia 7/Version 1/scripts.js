function ExtraerNumero(numero){
    let minumero= document.getElementById(numero).value;
    minumero= Number(minumero);
    return minumero
// se crea una funcion para capturar los numeros del id de ventas
// lo que se pone por parametro es una "varible",
//se declara una variable que almacene el valor de la varibale numero,
//luego se especifica que el tipo de dato que se va extraer de mi numero
//luego se hace un retorno de la funcion 
}

function Calcular(){
    let ventas=[];
    ventas[0]= ExtraerNumero("VentasTIENDA1");
    ventas[1]= ExtraerNumero("VentasTIENDA2");
    ventas[2]= ExtraerNumero("VentasTIENDA3");
    ventas[3]= ExtraerNumero("VentasTIENDA4");
    ventas[4]= ExtraerNumero("VentasTIENDA5");
    ventas[5]= ExtraerNumero("VentasTIENDA6");
    // aqui lo que se hace es llamar a la funcion para que haga el
    //procedimiento de extraer el numero

    let total= Sumar(ventas)
    let VentaMayor= Mayor(ventas)
    let VentaMenor= Menor(ventas)
    let mensaje= "El total de ventas es : "+ total+
    "/ Venta Mayor: "+ VentaMayor +" /Venta Menor : "+ VentaMenor;
    document.getElementById("Salida").textContent=mensaje;



}
function Sumar(array){
let total=0;
for(let venta of array){
    total=venta+total
}
return total;
}
function Mayor(array){
let maximo=array[0]
for(let venta of array){
    if(venta>maximo){
        maximo=venta;
    }
}
return maximo;
}
function Menor(array){
   let menor=array[0]
   for(let venta of array){
    if(venta<menor){
        menor=venta;
    }
   }
   return menor;
}
