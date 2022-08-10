const clickButton = document.querySelectorAll(".button");
const tbody = document.querySelector(".tbody")
let botonComprar = document.querySelector(".botonComprar");
let carrito = [];

botonComprar.addEventListener("click",() => {
    Swal.fire({
        customClass: {
            icon: "iconoComprar"
        },
        position: 'center',
        icon: 'success',
        color: "rgb(166, 77, 124)",
        title: 'Su compra ha sido exitosa',
        footer: "Gracias por confiar en nosotros",
        showConfirmButton: false,
        timer: 3000
      })
})

clickButton.forEach(btn => {
    btn.addEventListener("click", addToCarritoItem)
})


function addToCarritoItem(e){
    const button = e.target;
    const item = button.closest(".card")
    const itemTitle = item.querySelector(".card-title").textContent;
    const itemPrice = item.querySelector(".precio").textContent;
    const itemImg = item.querySelector(".card-img-top").src;
    
    const newItem = {
        title:itemTitle,
        precio: itemPrice,
        img: itemImg,
        cantidad: 1
    }

    addItemCarrito(newItem);
}

function addItemCarrito(newItem){
    const alert = document.querySelector(".alert")

    setTimeout(function (){
        alert.classList.add("hide")
    }, 2000)
    alert.classList.remove("hide")

    const inputElement = tbody.getElementsByClassName("input__elemento")
    for(let i = 0; i < carrito.length; i++){
        if(carrito[i].title.trim() === newItem.title.trim()){
            carrito[i].cantidad++;
            const inputValue = inputElement[i]
            inputValue.value++;

            carritoTotal()
            return null;
        }
    }

    carrito.push(newItem);
    renderCarrito();

}

function renderCarrito(){
    tbody.innerHTML = ""
    carrito.map(item => {
        const tr = document.createElement("tr")
        tr.classList.add("itemCarrito")
        const content = `
        <th scope="row">1</th>
        <td class="table__productos">
            <img src=${item.img} alt="">
            <p class="title">${item.title}</p>
        </td>
        <td class="table__price"><p>${item.precio}</p></td>
        <td class="table__cantidad">
            <input type="number" min="1" value=${item.cantidad} class="input__elemento">
            <button class="delete btn btn-danget">x</button>
        </td> `
        tr.innerHTML = content;
        tbody.append(tr)

        tr.querySelector(".delete").addEventListener("click", removeItemCarrito)
        tr.querySelector(".input__elemento").addEventListener("change", sumaCantidad)
    })
    carritoTotal()
}

function carritoTotal(){
    let total = 0;
    const itemCartTotal = document.querySelector(".itemCartTotal");
    carrito.forEach((item) => {
        const precio = Number(item.precio.replace("$", ""))
        total = total + precio*item.cantidad
    })

    itemCartTotal.innerHTML = `Total $${total}`
    addLocalStorage()
}

function removeItemCarrito(e){
    const buttonDelete = e.target;
    const tr = buttonDelete.closest(".itemCarrito");
    const title = tr.querySelector(".title").textContent;
    for(let i= 0; i < carrito.length; i++){
        let actPrecio = (carrito[i].title.trim() === title.trim()) ? carrito.splice(i, 1) : false;
    }

    const alert = document.querySelector(".remove")

    setTimeout(function (){
        alert.classList.add("remove")
    }, 2000)
    alert.classList.remove("remove")


    tr.remove();
    carritoTotal();
}

function sumaCantidad(e){
    const sumaInput = e.target;
    const tr = sumaInput.closest(".itemCarrito")
    const title = tr.querySelector(".title").textContent;
    carrito.forEach(item => {
        if(item.title.trim() === title){
            sumaInput.value < 1 ? (sumaInput.value = 1) : sumaInput.value;
            item.cantidad = sumaInput.value;
            carritoTotal()
        }
    })

}
// localStorage

function addLocalStorage(){
    localStorage.setItem("carrito", JSON.stringify(carrito));
}

window.onload = function(){
    const storage = JSON.parse(localStorage.getItem("carrito"));
    if(storage){
        carrito = storage;
        renderCarrito();
    }
}





















/* const boton = document.querySelectorAll(".button");
boton.forEach(addBtn => {
    addBtn.addEventListener("click", addToCartClicked);
});
const tbody = document.querySelector(".tbody")

function addToCartClicked(event) {
    const button = event.target;
    const item = button.closest(".item")
    
    const itemTitle = item.querySelector(".item-title").textContent;
    const itemPrice = item.querySelector(".precio").textContent;
    const itemImage = item.querySelector(".card-img-top").src;
    
    addItemToShoppingCart(itemTitle, itemPrice, itemImage);

}

function addItemToShoppingCart(itemTitle, itemPrice, itemImage){
    const shoppingCartRow = document.createElement("tr");
    const shoppingCartContent = `
    <tbody class="tbody">
    <tr>
    <th scope="row">1</th>
    <td class="table__productos">
        <img src=${itemImage} alt="">
        <p class="title__carrito">${itemTitle}</p>
    </td>
    <td class="table__precio">
        <p class="shoppingCarItemPrice">${itemPrice}</p>
    </td>
    <td class="table__cantidad">
        <input class="inputCarrito" type="number" min="1" value="1">
        <button class="delete btn btn-danget">x</button>
    </td>
    </tr>
    </div>
    </tbody>
`;
  shoppingCartRow.innerHTML = shoppingCartContent;
  tbody.append(shoppingCartRow);

  updateShoppingCartTotal()
}
 
function updateShoppingCartTotal(){
    let total = 0;
    const shoppingCartTotal = document.querySelector(".itemCartTotal");
    const shoppingCartItems = document.querySelectorAll(".shoppingCartItem");
    console.log(shoppingCartItems)
shoppingCartItems.forEach(shoppingCartItem => {
    const shoppingCartItemPriceElement = shoppingCartItem.querySelector(".shoppingCarItemPrice")
    console.log(shoppingCartItemPriceElement)
    
}) 
}
 */



























//PAGINA CONTACTANOS

/* const formulario = document.getElementById("form");

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
}) */
// PAGINA CONTACTANOS


































