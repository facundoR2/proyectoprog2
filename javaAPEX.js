// se crean los objetos a utulizar
const pedido =[
    {
        numero:0,
        ordenado:[],
        preciototal:"",
    }
]
const comida=[
    {
        comida:"",
        precio:"",
        pedido:"",
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
pedidohtml.addEventListener("submit",(Event)=>{
    Event.preventDefault()//<= previene que la pagina se recarge automaticamente al clickear
pedido.push({
    numero:1,
    ordenado:[
        pedidohtml.hamburguesasi.value,
        pedidohtml.pollosi.value,
        pedidohtml.papitassi.value
    ]

    });
    precioCalculadora();
    console.log(precioCalculadora())

})
//fin seccion armado

const Pjson=[];
const comidahtml= document.getElementById("box1")
//seccion donde se llama hace una request a apex para que nos respoda con un objeto json.
fetch('https://apex.oracle.com/pls/apex/cent35prog/comidas/')
 .then(function respuesta(res){
    console.log(typeof res)
    Pjson=JSON.stringify(res);

    return res.json();

}) //funcion para ingresar el json de APEX en la pagina.
.then(function(data){
    console.log(data)
    for(comida of data){
        comidahtml.innerHTML +=`
        <div class="productocomida">
        <h2>Comida: ${comida.comida}</h2>
        <h2>Precio: ${comida.precio}</h2>
        <h2>pedido: ${comida.pedido}</h2>
        </div>`

    }
})
 
   

console.log(Pjson)
//se crea un try donde espera la respuesta de la url a la que se le hizo una solicitud
