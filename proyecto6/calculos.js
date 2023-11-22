let array=[1,4,2,5];
function Notas(){
    let lista=document.getElementById("listaNotas");
    for(let nota of array){
        let item=document.createElement("li");
        item.innerText=nota;
        lista.appendChild(item)
    }
}
function Calcular(){
    let suma=0;
    for(i=0;i<array.length;i++){
       suma+=array[i];

    }
    let promedio =(suma/array.length)
}
function Alta(){
    let notaalta=0;
    let i=0;
    while(i<array.length){
        
        if(array[i]>notaalta){
            notaalta=array[i];
        }
        i++
    }
    document.getElementById("nota").textContent=notaalta
}
