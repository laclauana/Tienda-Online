// declaracion de variables

const filtroBusqueda = document.querySelector("#busqueda")
const categoriaFiltro = document.getElementsByClassName("filtro-categoria")
const tarjetaInstrumento = document.querySelectorAll(".producto")
const puntaje = document.getElementsByClassName("filtro-puntaje")
const limpiar = document.querySelector(".fa-trash-alt")
const checkbox = document.querySelectorAll("input")
const imagenesInstrumentos = document.querySelectorAll(".contenedor-imagen .modo-lista") // o ".vista-cuadricula"
const botonComprar = document.querySelectorAll(".comprar")
const carrito = document.querySelector(".fas.fa-shopping-cart")
const cantidadCarrito = document.querySelector(".carrito > p")
const carritoAbierto = document.querySelector(".contenedor-carrito-abierto")
const overlay = document.querySelector(".overlay-contenido")
const cerrarCarrito = document.querySelector(".fa.fa-times")


//  -------------- acciones boton carrito ---------------

carrito.onclick = () => {
    carritoAbierto.classList.remove("ocultar")
    overlay.classList.remove("ocultar")
}
cerrarCarrito.onclick = () => {
    carritoAbierto.classList.add("ocultar")
    overlay.classList.add("ocultar")
}

for (let botones of botonComprar) {
    botones.onclick = () => {
        let cantidad = 0
        cantidadCarrito.textContent = `Carrito (${cantidad + 1} item)`
    }
}




// const producto = document.querySelectorAll(".producto")
// producto.onclick = (e) => {

// }

// nombreVariable.classList.toggle("equis-clase")  
// es un switch generalmente para boton encendido / apagado, como para poner modo oscuro a una web

// nombreVariable.classList.contains("equis-clase")   
// devuelve un booleano que dice si el elemento contiene o no esa clase

// const elementosLista = document.getElementsByTagName("div")
// const romperSitio = () => {
// for (let elemento of elementosLista) {
//     elemento.classList.add("ocultar")
// }
// }
// romperSitio()

// const todosLosP = document.getElementsByTagName("p")
// console.log(todosLosP[2])

// const img = document.querySelector("img")
// console.log(img.src)
// img.src = "http://www.placekitten.com/200"
// console.log(img.src)

// const cambiarDePagina = document.querySelector("a")
// cambiarDePagina.href = "https://www.placekitten.com/200"
// ejemplo no util para la tienda. Seguramente se pueda llevar a otro html propio. 
// window.onkeydown  --> evento de teclado cuando estas por tipear
// window.onkeypress --> evento de teclado cuanto tipeaste, pulsaste
// window.onkeyup --> evento de teclado cuando soltaste la tecla
// nombreVariable.onmouseenter --> evento que sucede cuando el mouse entra en un elemento
// nombreVariable.onmouseleave --> evento que sucede cuando el mouse sale de un elemento
// window.onresize --> evento de teclado para cuando el usuario cambia el tamanio de su pantalla
// window.scroll --> evento para cuando el usuario scrollea hacia abajo

window.onkeydown = (e) => {
    if (e.keyCode === 13) {
        alert("¿Qué se te ofrece?")
    }
}



// const boton = document.querySelector('#boton')

// const limpiarFiltro = () => {
//     const listaDeCheckbox = document.getElementsByClassName('filter')
//     filtroNombre.value = " "
//     for (let checkbox of listaDeCheckbox) {
//         checkbox.checked = false
//     }
// }

// boton.onclick = () => {

//     limpiarFiltro()
// }





// <button id="abrir-carrito">Carrito</button>

// <div class="carrito">
//   <h2>Carrito de compras</h2>
//   <p>Tus productos son</p>
//   <p>Celular Samsung</p>

//   <label>Pagar con tarjeta
//     <input type="checkbox" value="tarjeta" id="tarjeta">
//   </label>
//   <p id="recargo"></p>
//   <p id="subtotal">0</p>
//   <p id="total">0</p>

//   <button id="cerrar-carrito">Salir</button>
// </div>

// const carrito = document.querySelector(".carrito")
// const subtotal = document.querySelector("#subtotal")
// const total = document.querySelector("#total")
// const recargoParrafo = document.querySelector("#recargo")
// const checkboxTarjeta = document.querySelector("#tarjeta")
// const botonMostrarCarrito = document.querySelector("#abrir-carrito")
// const botonOcultarCarrito = document.querySelector("#cerrar-carrito")

// const subtotalProductos = 5999

// carrito.classList.add("ocultar")

// botonMostrarCarrito.onclick = () => {
//   subtotal.textContent = subtotalProductos
//  carrito.classList.remove("ocultar")
// }

// botonOcultarCarrito.onclick = () => {
//   carrito.classList.add("ocultar")
// }

// checkboxTarjeta.onclick = () => {
//   const recargo = subtotalProductos * 0.1
//   recargoParrafo.textContent = recargo
//   total.textContent = subtotalProductos + recargo
// }





// let tieneDescuento = true
// let tieneRecargo = false
// let tieneGastoDeEnvio = true

// const obtenerDescuento = (subtotal) => {
//     subtotal - (subtotal * 0.1)
// }
// obtenerDescuento(100)


// const obtenerRecargo = (subtotal) => {
//     subtotal + (subtotal * 0.1)
// }
// obtenerRecargo(100)


// const obtenerGastoDeEnvio = (subtotal) => {
//     subtotal + 50
// }

// const obtenerTotal = (precio) => {
//     if (tieneDescuento) {
//         obtenerDescuento(precio) - precio
//     }
//     if (tieneRecargo) {
//         obtenerRecargo(precio) - precio
//     } if (tieneGastoDeEnvio) {
//         obtenerGastoDeEnvio(precio) - precio
//     }
// }
// obtenerTotal(100)

// const obtenerCalculoDescuento = (precio) => {
//     let descuento = obtenerDescuento(precio) - precio
//     return descuento
// }

// const obtenerCalculoRecargo = (precio) => {
//     let recargo = obtenerRecargo(precio) + precio
//     return recargo
// }

// const obtenerCalculoEnvio = (precio) => {
//     let envio = obtenerGastoDeEnvio(precio) - precio
//     return envio
// }
