//creacion de una funcion asincronica que va a recibir dos parametros "titulo y contenido"
async function Datos(titulos, contenido){
    try {
        //primero utilizar fetch para obtener el el archivo json
        let respuesta= await fetch("https://jsonplaceholder.typicode.com/posts",{
            method:"POST",
            headers:{
                "Content-type":"application/json"

            },
            //aqui tenenmos que ir al json para ver como esta escturcturado dentro del json se tiene un titulo, cuerpo y un userId
            body: JSON.stringify({
                title: titulos,
                body: contenido,
                uderId: 101,

            })
        })//verificacion si la peticion hubo un error 
        if(!respuesta.ok){
            throw new Error ("Error en la solicutud"+ respuesta.statusText )

        }else{
            let data= await respuesta.json();
            console.log("Registro creado", data)
        }

        
    } catch (error) {
        console.error("Hubo un error")
    }

}
Datos("Juan","KAKAKASKA")