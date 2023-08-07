// se crean los objetos a utulizar
var pedido =[
    {
        numero:0,
        ordenado:[],
        preciototal:"",
    }
]
var npedido =Object.create(pedido);
//seccion armado y enviado de json de pedidos
function enviarjson(orden){
    var enviopedidojson = JSON.stringify(orden);
    fetch("https://apex.oracle.com/pls/apex/cent35prog/comidasrapidas/pedidos",{
        method:"POST",
        body:JSON.stringify(enviopedidojson),
        headers:{
            "Content-Type":"application/json",
        }
        
    }).then(function(respuesta){
        return respuesta.json();
    }).then(function(data) {
        console.log("se envio ok",data);
    });

}
//////fin seccion//////

let formulariopedidos = document.querySelector(".pedido");
formulariopedidos.addEventListener("submit",(Event,npedido)=>{
    Event.preventDefault();
    function constructor(pedido){
        this.pedido = pedido;
        this.ordenado = pedido.ordenado;
    }
    var objetopedido = new constructor(pedido);
    var selectores = document.querySelectorAll('select');
    for (var i=0; i<selectores.length;i++){
        // var nlpedido = new npedido;
        var pollo ="pollo";
        var hamburguesa ="hamburguesa";
        var papitas = "papitas";
        if (selectores[i] =="hamburguesa"){
            objetopedido.ordenado.push(hamburguesa);
            console.log(objetopedido.ordenado);
        }else{
            if(selectores[i]=="pollo"){
                orden.ordenado.push(pollo);
                console.log(ordenado);
            }else{
                if(selectores[i]=="papitas"){
                    orden.ordenado.push(papitas);
                    console.log(ordenado);
                }
            }
        }
        // console.log(pedido.ordenado)
    }
    enviarjson(objetopedido);
});


//fin seccion armado
//seccion envio del pedido a la base de datos

//fin seccion envio
//seccion donde se envia la orden en formato json a apex
var mivector =[]
const comidahtml= document.getElementById("box1")
 var promesa = fetch("https://apex.oracle.com/pls/apex/cent35prog/comidasrapidas/comidas");
 promesa.then(function(respuesta){
    //hacemos que devuelva la promesa en formato json().
    return respuesta.json();
 
}).then(function(datos){
    //se crean variables locales para poder mover los datos del array
    //a un vector
    var items = datos.items;
    //creamos una variable para mostrarla por consola del navegador y confirmar que esten los datos
    var mivariable = datos;
    //se muestra la variable por la consola del navegador
    console.log(mivariable);
    //se crea un for para mover los objetos del array a otro vector
    for (let i =0;i<items.length;i++){
        mivector.push(items[i]);
    }
    //se crea otro for para que vaya mostrando en el div cada objeto creado
    for (let i =0;i<mivector.length;i++){
        let item = mivector[i];
        // se crea una variable que contiene el div que se mostrara en la pagina.
        let html = `<div class="productocomida">
        <p>Comidas: ${item.comidas}</p>
        <p>Precio: ${item.precio}</p>
        <p>Pedidos: ${item.pedidos}</p>
        </div>`;
        //modifico el div del html con la variable que contiene el div
        comidahtml.innerHTML+=html;
        

    }
 })
//     .then(function(res){
//         console.log(typeof res)
//         return res.json();

// }) //funcion para ingresar el json de APEX en la pagina.
// .then(
//      =
// )

// }
// .then(
//     function(data){
//     // comida="";
//     console.log(data)
//     for(com of comida(data)){
//         comidahtml.innerHTML +=`
//         <div class="productocomida">
//         <h2>Comida: ${com.items[0].comidas.value}</h2>
//         <h2>Precio: ${com.items[0].precio.value}</h2>
//         <h2>pedido: ${com.items[0].pedidos.value}</h2>
//         </div>`

//     }
// }
// )
//se crea un try donde espera la respuesta de la url a la que se le hizo una solicitud
