const contenedorTarjetas = document.getElementsByClassName("vista-cuadricula")
const vistaCuadricula = document.getElementsByClassName("contenedor-tarjetas")
const vistaProductoCuadricula = document.getElementsByClassName("producto")

const productosEnLista = document.querySelector(".fa-list-alt")
const cambiarDisplayProductos = () => {
    productosEnLista.onclick = () => {

        contenedorTarjetas.classList.remove("vista-cuadricula")
        // contenedorTarjetas.classList.add("modo-lista")
        vistaCuadricula.classList.remove("contenedor-tarjetas")
        // vistaCuadricula.classList.add("estilo-lista")
        vistaProductoCuadricula.classList.remove("producto")
        // vistaProductoCuadricula.classList.add("en-lista")
    }
}
cambiarDisplayProductos()



// // cuando se escriba algo en el input
// filtroNombre.oninput = () => {
//     // recorro una a una cada tarjeta
//     for (let tarjeta of tarjetas) {
//         // me fijo el nombre de la tarjeta y qué buscó el usuario
//         const titulo = tarjeta.dataset.nombre;
//         const busqueda = filtroNombre.value;
//         // si el titulo incluye lo que buscó el usuario...
//         if (titulo.includes(busqueda)) {
//             // le quito la clase "hidden" a la tarjeta
//             tarjeta.classList.remove('hidden');
//         } else {
//             // se la agrego
//             tarjeta.classList.add('hidden');
//         }
//     }
// };

// // recorro uno a uno los checkbox
// for (let checkbox of filtroRating) {
//     // si le hacen clic a uno de los checkbox
//     checkbox.onclick = () => {
//         // recorro una a una las tarjetas
//         for (let tarjeta of tarjetas) {
//             // si el checkbox esta seleccionado
//             if (checkbox.checked) {
//                 const rating = tarjeta.dataset.rating;
//                 // me fijo si el valor del checkbox es igual al rating de la tarjeta
//                 if (checkbox.value === rating) {
//                     tarjeta.classList.remove('hidden');
//                 } else {
//                     tarjeta.classList.add('hidden');
//                 }
//                 // si el checkbox NO esta seleccionado... 
//             } else {
//                 tarjeta.classList.remove('hidden');
//             }
//         }
//     };
// }

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