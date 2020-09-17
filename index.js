// declaracion de variables

const filtroBusqueda = document.querySelector("#busqueda")
const categoriaFiltro = document.getElementsByClassName("filtro-categoria")
const tarjetaInstrumento = document.querySelectorAll(".producto")
const puntaje = document.getElementsByClassName("filtro-puntaje")
const limpiar = document.querySelector(".fa-trash-alt")
const checkbox = document.querySelectorAll("input")
const imagenesInstrumentos = document.querySelectorAll(".contenedor-imagen .modo-lista") // o ".vista-cuadricula"
const botonComprar = document.querySelectorAll(".comprar")
const carrito = document.querySelector(".carrito > button")
const cantidadCarrito = document.querySelector(".carrito span")
const carritoAbierto = document.querySelector(".contenedor-carrito-abierto")
const overlay = document.querySelector(".overlay-contenido")
const cerrarCarrito = document.querySelector(".fa.fa-times")


//  -------------- acciones boton carrito ---------------

carrito.onclick = () => {
    carritoAbierto.classList.toggle("ocultar")
    overlay.classList.toggle("ocultar")
}
cerrarCarrito.onclick = () => {
    carritoAbierto.classList.toggle("ocultar")
    overlay.classList.toggle("ocultar")
}

for (let botones of botonComprar) {
    botones.onclick = () => {
        let cantidad = 0
        cantidadCarrito.textContent = `Carrito (${cantidad + 1} item)`
    }
}

// filtroBusqueda.oninput = () => {

// }


// const borrarInputs = () => {

// }


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




// input type submit es para cuando enviamos el formulario.
// el atributo value es lo que dira el boton dentro.

//input type text, type number, type email, type date, type color, radio, select. El button lleva type button
//select es una etiqueta que lleva atributo name
//dentro lleva etiquetas option con el value de la abreviacion de ese contenido por ej.

// en mi codigo SIEMPRE HABRA VALUE en el INPUT que es lo que escribe el usuario.
// excepto en edad y etc datos personales.
// los que NO llevan value son input type CHECKBOX, RADIO y SELECT.
// cuando les doy value esos tres no es para el usuario.

// const fecha = document.querySelector("#fecha")  <-- input
// console.log(fecha.value) <-- en ese caso vere la fecha que ingrese en el value

// const inputEdad = document.querySelector("#input-edad")
// form.onsubmit = (e) => {
// e.preventDefault();
// if (inputEdad.value < 18) {
// checkEdad.textContent = "Sos menor de edad"
// inputEdad.classList.add("input-error")
// }
// console.log(inputEdad.value)
// }
// si quiero que se envie la funcion es form.submit pero no se usa.

// inputPassword.onblur = (e) => {     // cuando el usuario hace foco el evento es focus, cuando sale del input es blur. Solo se dispara onblur si previamente hubo onfocus
    // if (inputPassword.value.length < 8) {
        // checkPassword.textContent = "Tu password es muy corta"
        // inputPassword.classList.add("input-error")
//     }
// }

// evento de input .onchange alude a toda vez que cambie algo por parte del usuario. Escucha cualquier cambio que haya ocurrido en mi input.
// el evento .oninput alude a cuando el usuario escribe en mi input


// si uso por ejemplo
// inputName.oninput = (e) => {
    // console.log(e)
// }                       voy a estar oyendo lo que puso el usuario en ese evento

// const boton = document.querySelector("button")
// boton.onclick = (e) => {   // puede ser e o event
// la E trae informacion sobre el evento en si. 
// si ingresamos console.log veremos por ejemplo el TARGET que nos indica el elemento al que le hicieron clic
    // console.log("hiciste clic")
// }