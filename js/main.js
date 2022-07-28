
//PAGINA CONTACTANOS

const formulario = document.getElementById("form");

formulario.addEventListener("submit", (e)=>{
    e.preventDefault();
    let nombre = document.getElementById("inputNombre").value;
    console.log(nombre);
    let apellido = document.getElementById("inputApellido").value;
    console.log(apellido);
    let email = document.getElementById("inputEmail").value;
    console.log(email);
    let mensaje = document.getElementById("inputMensaje").value;
    console.log(mensaje);
    
}) 
const selector = document.querySelector(".seccioncontacto__selector");

selector.addEventListener("change",() =>{
    console.log(`El usuario eligio la opcion ${selector.value}`);
}) 

const botonEnviar = document.getElementById("enviar");

botonEnviar.addEventListener("click",(e)=>{
    e.target;
    console.log(e)
})
// PAGINA CONTACTANOS


































