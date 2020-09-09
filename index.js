const filtroPagina = document.querySelector("#pagina")
const tarjetas = document.getElementsByClassName("producto")
const puntaje = 

// const filtroNombre = document.querySelector('#filtro');
// const tarjetas = document.getElementsByClassName('product');
// const filtroRating = document.getElementsByClassName('review-filter');

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


