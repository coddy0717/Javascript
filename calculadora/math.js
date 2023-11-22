let respuesta;

function Mostrar(respuesta) {
    let texto = document.getElementById("Respuesta");
    texto.textContent = respuesta;
}

function Sumar() {
    let num1 = +document.getElementById("num1").value;
    let num2 = +document.getElementById("num2").value;
    respuesta = num1 + num2;
    Mostrar();
}
function Restar() {
    let num1 = +document.getElementById("num1").value;
    let num2 = +document.getElementById("num2").value;
    respuesta = num1 - num2;
    Mostrar();
}
function Multiplicar() {
    let num1 = +document.getElementById("num1").value;
    let num2 = +document.getElementById("num2").value;
    respuesta = num1 * num2;
    Mostrar();
}
function Dividir() {
    let num1 = +document.getElementById("num1").value;
    let num2 = +document.getElementById("num2").value;
    respuesta = num1 / num2;
    Mostrar();
}
function Randon(){
    let num1 = +document.getElementById("num1").value;
    let num2 = +document.getElementById("num2").value;
    num1= num1+1;
    respuesta= Math.random()*(num1-num2)+num2
    Mostrar()
}
function Redondear(){
    respuesta= Math.round(respuesta)
    Mostrar()
}
function Redondearflor(){
    respuesta= Math.floor(respuesta)
    Mostrar()
}
function RedondearCeil(){
    respuesta= Math.ceil(respuesta)
    Mostrar()
}
function potencia() {
    let num1 = +document.getElementById("num1").value;
    let num2 = +document.getElementById("num2").value;
    respuesta =Math.pow(num1,num2);
    Mostrar();
}
function raiz() {
    let num1 = +document.getElementById("num1").value;
    let num2 = +document.getElementById("num2").value;
    let raiz1 = Math.sqrt(num1);
    let raiz2 = Math.sqrt(num2);
    let resultado = "La raíz cuadrada del primer número es: " + raiz1 + ". El resultado de la raíz cuadrada del segundo número es: " + raiz2;
    respuesta = resultado;
    Mostrar();
}


function absoluto() {
    let num1 = +document.getElementById("num1").value;
    let num2 = +document.getElementById("num2").value;
    let a1 =Math.abs(num1);
    let a2= Math.abs(num2);
    respuesta= " Valor absoluto de: "+num1+ " es " + a1+" Valor absoluto de :" +num2+" es "+ a2;
    Mostrar();
}