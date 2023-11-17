let array =[1,2,3,4,5]
let lista= document.getElementById("lista")
let promedio= document.getElementById("Promedio")
let may= document.getElementById("may")
let meno= document.getElementById("men")


function Mostrar (){
    let y=1;
    for(let x of array){
       let list= document.createElement("li");
       list.innerText=("Nota "+ y+ " : " +x)
       lista.appendChild(list);
       y++
    } 
}
function Promedio(){
    let suma=0
    for( x of array){
        
      (suma +=x)
    }
    let pro= suma/array.length
     promedio.textContent = pro;
        if(pro<5){ 
        alert("Ha reprobado")

    
        }
      

        
   
}
function Mayor(){
    let mayor=0;
    for(let x=0;x <= array.length;x++){
        if(array[x]>mayor){
            mayor= array[x]
            may.textContent=mayor +  " y es la nota "+ array[x]

        }
    }
}
function Menor(){
    let menor=4;
    for(let x=0;x<=array.length;x++){
        if(array[x]<menor){
            menor=array[x]
            meno.textContent=menor+ " y es la nota "+ array[x]
        }
    }
}