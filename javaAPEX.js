// se crean los objetos a utilizar
var pedido =[
    {
        numero:0,
        ordenado:[],
        preciototal:"",
    }
]
var npedido =Object.create(pedido);
//seccion armado y enviado de json de pedidos
function enviarjson(objetopedido){
    var enviopedidojson = JSON.stringify(objetopedido);
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
        console.log(JSON.parse(enviopedidojson));
    });

}
//////fin seccion//////

/// seccion donde se agrega al objeto las opciones elegidas por el usuario.///
let formulariopedidos = document.querySelector(".pedido");
formulariopedidos.addEventListener("submit",(Event,npedido)=>{
    Event.preventDefault();
    function constructor(pedido,ordenado,preciototal){
        this.pedido = pedido;
        this.ordenado = ordenado;
        this.preciototal = preciototal;
    }
    //se crea un constructor para utilizar dentro del listener.
    var objetopedido = new constructor(0,[],"");
    var selectores = document.querySelectorAll('.pedido input[type="text"]');
    for (var i=0; i<selectores.length;i++){
        // var nlpedido = new npedido;
        if (selectores[i] ="hamburguesa"){
            objetopedido.ordenado.push(selectores[i].nodeValue);
            objetopedido.pedido.push(1);
            console.log(objetopedido.ordenado);
        }else{
            if(selectores[i]=="pollo"){
                orden.ordenado.push(selectores[i].value);
                console.log(ordenado);
            }else{
                if(selectores[i]=="papitas"){
                    orden.ordenado.push(selectores[i].value);
                    console.log(objetopedido.ordenado[i]);
                }
            }
        }
        // console.log(pedido.ordenado)
    }
    enviarjson(objetopedido);
});


//fin seccion armado
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
