productos();

function productos () {
let inicio = alert(`Para saber sobre nuestros productos primero debe ingresarse`)
let nombre = prompt("ingrese su nombre");
let apellido = prompt("ingrese su apellido");
let edad = parseInt(prompt("ingrese su edad"));
    if(edad >= 18){
        alert (`Bienvenido ${nombre} ${apellido}`);
        alert (`productos disponibles:
        1- Perfuminas
        2- Difusores 
        Escriba ESC para terminar su consulta`);
        let consultaPrecio = prompt("escriba el producto que desea consultar");
        while(consultaPrecio !== "ESC" && consultaPrecio !== "esc") {
            switch(consultaPrecio.toLowerCase()){
                case "perfuminas":
                    alert(`El precio de las perfuminas es de $650`);
                    let perfuminas = prompt("¿cuantas unidades desea adquirir?")
                    valorFinal(totalperfuminas(perfuminas));
                    break;
                
                case "difusores":
                    alert(`El precio de los difusores es de $500`);
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
    }else{
        alert (`No puedes ingresar, eres menor de edad`)
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
