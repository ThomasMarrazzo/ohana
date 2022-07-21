
const productos = [
    { nombre: "perfumina vivex", precio: 400},
    { nombre: "perfumina limon", precio: 400},
    { nombre: "perfumina citrus", precio: 400},
    { nombre: "perfumina floral", precio: 400},
    { nombre: "perfumina jazmin", precio: 400},
    { nombre: "difusor frutivex", precio: 530},
    { nombre: "difusor katmandu", precio: 530},
    { nombre: "difusor chiky", precio: 530},
    { nombre: "difusor te verde", precio: 530},
    { nombre: "difusor rosa jazmin", precio: 530},
];
let carrito = [];

let seleccion = prompt("Hola ¿Desea comprar algun producto?");

while(seleccion != "si" && seleccion != "no"){
    alert("ingresar si o no")
    seleccion = prompt("¿Desea comprar algun producto?")
}

if(seleccion == "si"){
    alert("A continuacion la lista de prodcutos disponibles")
    let todoslosProductos = productos.map((producto)=> `${producto.nombre} ${producto.precio}$`);
    alert(todoslosProductos.join(" - "));
}else if (seleccion == "no"){
    alert("Gracias por su atencion!")
}

while(seleccion != "no"){
    let producto = prompt("Agrega un producto a tu carrito");
    let precio = 0;

    if(producto == "perfumina vivex" || producto == "perfumina limon" || producto == "perfumina citrus"
    || producto == "perfumina floral" || producto == "perfumina jazmin" || producto == "difusor frutivex" 
    || producto == "difusor katmandu" || producto == "difusor chiky" || producto == "difusor te verde"
    || producto == "difusor rosa jazmin"){
        switch(producto){
            case "perfumina vivex":
                precio = 400;
                break;
            case "perfumina limon":
                precio = 400;
                break;
            case "perfumina floral":
                precio = 400;
                break;
            case "perfumina citrus":
                precio = 400;
                break;
            case "perfumina jazmin":
                precio = 400;
                break;
            case "difusor katmandu":
                precio = 530;
                break;
            case "difusor frutivex":
                precio = 530;
                break;
            case "difusor chiky":
                precio = 530;
                break;
            case "difusor te verde":
                precio = 530;
                break;
            case "difusor rosa jazmin":
                precio = 530;
                break;
            default:
                break;  
        }
        let unidades = parseInt(prompt("¿Cuantas unidades desea agregar?"));
        carrito.push({producto, unidades, precio})
        console.log(carrito)

    }else{
        alert("No disponemos de ese producto");
    }
    seleccion = prompt("¿Desea seguir comprando?");
    while(seleccion == "no"){
        alert("Gracias por la compra! Hasta pronto!");
        carrito.forEach(carritoFinal => {
            console.log(`producto: ${carritoFinal.producto} unidades: ${carritoFinal.unidades} Total a pagar: ${carritoFinal.unidades * carritoFinal.precio}`)
        })
    break;
    }
}

const total = carrito.reduce((acc, el) => acc + el.precio * el.unidades, 0);
console.log(`El total de su compra es: ${total}`);



































