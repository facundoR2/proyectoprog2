// se crean los objetos a utulizar
const pedido =[
    {
        numero:0,
        ordenado:[],
        preciototal:"",
    }
]
var comida=[
    {
        items:[{
            comidas:"",
            precio:"",
            pedidos:"",
        }],
        hasmore:"",
        limit:"",
        offset:"",
        count:"",
        links:[]
    }
]
//seccion armado de json de pedidos
function confirmaciones(pedidohtml){
    if (document.getElementById("#hamburguesasi")=true){
        pedido.ordenado=["hamburguesa"];
    }else{}
    if (pedidohtml.pollosi.value =true){
        pedido.ordenado+=""
    }
}
const pedidohtml = document.querySelector(".pedido");
//funcion para el precio total
function precioCalculadora(pedidohtml){
    valorhamburgesa = 550;
    valorpollo =300;
    valorpapasfritas=200;
    preciototal =0;
    var hambrg = document.getElementById("hamburguesasi").value;
    var pollo = document.getElementById("pollosi").value;
    var papas= document.getElementById("papitassi"),value;
    if(hambrg=true){preciototal=preciototal+valorhamburgesa}
    if(pollo=true){preciototal=preciototal+valorpollo}
    if(papas=true){preciototal=preciototal+valorpapasfritas}
    return preciototal;
    
}
//evento que se efectua cuando el usuario clickea en "ordenar".
// pedidohtml.addEventListener("submit",(Event)=>{
//     Event.preventDefault()//<= previene que la pagina se recarge automaticamente al clickear
// pedido.push({
//     numero:1,
//     ordenado:[
//         pedidohtml.hamburguesasi.value,
//         pedidohtml.pollosi.value,
//         pedidohtml.papitassi.value
//     ]

//     });
//     precioCalculadora();
//     console.log(precioCalculadora())

// })
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
