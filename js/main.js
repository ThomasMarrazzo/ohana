/* let carrito = [];
productos();

function productos () {
        alert (`productos disponibles:
        1- Perfuminas
        2- Difusores 
        Escriba ESC para terminar su consulta`);
        let consultaPrecio = prompt("escriba el producto que desea consultar").toLowerCase();
        while(consultaPrecio !== "ESC" && consultaPrecio !== "esc") {
            switch(consultaPrecio){
                case "perfuminas":
                    alert(`El precio de las perfuminas es de $650`);
                    alert(`productos disponibles de perfuminas:
                    Melisa y Verbena
                    Pera y Flores Blancas
                    Mora Frambuesa
                    Uva y Frutos del Bosque
                    Naranja Pimienta
                    Lavanda Manzanilla
                    Papaya Durazno
                    Baby Cotton
                    Rosa Jazmín
                    Nag Champa
                    Moon Sparkle
                    Mamá Bebé
                    Té con limón
                    Pitanga Preta
                    Coni
                    Vivex
                    Chiky
                    Limón
                    Té verde
                    Ralph Ksk` )
                    let perfu = prompt(`¿Que perfumina desea agreagar al carrito?`)
                    carrito.push(perfu);
                    console.log(carrito);
                    let perfuminas = prompt("¿cuantas unidades desea adquirir?")
                    valorFinal(totalperfuminas(perfuminas));
                    break;
                
                case "difusores":
                    alert(`El precio de los difusores es de $500`);
                    alert(`Productos disponibles de difusores:
                    Vivex
                    Limón
                    Citrus
                    Floral
                    Jazmín
                    Verbena
                    Frutivex
                    Katmandú
                    Nagchampa`)
                    let difusor = prompt(`¿Que difusor desea agreagar al carrito?`)
                    carrito.push(difusor);
                    console.log(carrito);
                    let difusores = prompt(`¿cuantas unidades desea adquirir?`)
                    valorFinal(totaldifusores(difusores));
                    break;
            
                default:
                    alert(`no selecciono ninguna consulta`);
                    break;
            }
            consultaPrecio = prompt(`ingrese otra consulta
            1- Perfuminas
            2- Difusores
            escriba ESC para terminar su consulta`);
        }
    }


function totalperfuminas (perfuminas) {
    return perfuminas * 650;
}
function totaldifusores (difusores) {
    return difusores * 500;
}
function valorFinal (cantidadProducto){
    alert (`el valor total a abonar es ${cantidadProducto}`);
}

 */

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

    if(producto == "perfumina Vivex" || producto == "perfumina limon" || producto == "perfumina citrus"
    || producto == "perfumina Floral" || producto == "perfumina jazmin" || producto == "Difusor frutivex" 
    || producto == "difusor katmandu" || producto == "difusor chiky" || producto == "Difusor te verde"
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



































