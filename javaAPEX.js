const pedido ={
    numero:1,
    ordenado:0,
    preciototal:0,
}
const comida=[
    {
        comida:"",
        precio:"",
        pedido:"",
    }
]
const comidahtml= document.getElementById("box1")
fetch('https://apex.oracle.com/pls/apex/cent35prog/comidas/')
 .then(function(res){
    return res.json();

}).then(function(data){
    console.log(data)
 
}).then(function(data){
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
//se crea un try donde espera la respuesta de la url a la que se le hizo una solicitud
