document.querySelector(".perfuminas__titulo").textContent = "Todos Nuestros Productos";
document.querySelector(".perfuminas__subtitulo").style.color = "rgb(166, 77, 124)";
document.getElementById("subtitulo2").style.color = "rgb(166, 77, 124)";

let fraseInicio = document.createElement("p");
fraseInicio.textContent = "Perfuma tu hogar con las mejores fragancias";
let texto = document.getElementById("introPerfumina");
texto.appendChild(fraseInicio);
console.log(fraseInicio) 

let frase = document.createElement("p");
frase.textContent = "Crea ambientes con propiedades relajantes gracias a los Difusores Aromáticos ";
let introFrase = document.getElementById("introDifusor");
introFrase.appendChild(frase);
console.log(frase)



































