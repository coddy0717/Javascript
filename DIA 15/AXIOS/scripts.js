//subir datos mediante axios
let datos={
    tittle: "nuevo titulo",
    body: "prueba"
}
axios.post("https://jsonplaceholder.typicode.com/posts", datos)
.then(respuesta=> console.log("Documento cargado",respuesta))
.catch(error=> console.error("ERROR",error))
//REALIZAR PETICIONES SIMUTANEAS 
let peticion1=axios.get("https://jsonplaceholder.typicode.com/posts")
let peticion2=axios.get("https://jsonplaceholder.typicode.com/posts")
let peticion3=axios.get("https://jsonplaceholder.typicode.com/posts")
axios.all([peticion1,peticion2, peticion3])
.then(axios.spread((peticion1,peticion2,peticion3)=>{
    //codio

}))
.catch(error=>{

})
//utilizando promesas
Promise.all([peticion1,peticion2, peticion3])
.then(([peticion1,peticion2, peticion3])=>{

})
.catch(error=>{

})
//interceptores 
let token ="mitoken"
//interceptor de pedido 
axios.interceptors.request.use(
    (config)=>{
        config.headers.Autorizatios= 'Bearers $(token)'
        return config
    },(error =>{
        return Promise.reject(error)
    })
)
//interceptor de respuesta
axios.interceptors.response.use(
    (config) =>{
        config.data.customField= "Nuevo campo"
        return config
    },(error =>{
        return Promise.reject(error)
    })
)