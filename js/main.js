let carrito = [];
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








































