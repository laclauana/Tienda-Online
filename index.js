// ---------------- Refreshing visible product amount ------------------------

const visibleProductsHeader = document.querySelector('#visible-products');

const refreshVisibleProducts = () => {
	let visibleAmount = singleProduct.length;
	for (let each of singleProduct) {
		if (each.classList.contains('hidden')) {
			visibleAmount--;
		}
	}

	visibleProductsHeader.innerHTML = `Mostrando ${visibleAmount} producto(s) de ${singleProduct.length}`;
};

// -------------- Search per product filter ----------------

const searchingFilter = document.querySelector('#searching');
const singleProduct = document.getElementsByClassName('product');

searchingFilter.oninput = () => {
	for (let each of singleProduct) {
		if (each.dataset.name.toLowerCase().includes(searchingFilter.value)) {
			each.classList.remove('hidden');
			refreshVisibleProducts();
		} else {
			each.classList.add('hidden');
			refreshVisibleProducts();
		}
	}
};

// ------------------- Search per grading filter ---------------------

const gradingFilter = document.getElementsByClassName('grading-filter');

for (let checkbox of gradingFilter) {
	checkbox.onclick = () => {
		filterProducts();
	};
}

const matchingCheckbox = () => {
	for (let checkbox of gradingFilter) {
		if (checkbox.checked) {
			return true;
		}
	}
};

const pickingMatch = (each) => {
	for (let checkbox of gradingFilter) {
		if (checkbox.value === each.dataset.grading && checkbox.checked) {
			return true;
		}
	}
};

const filterProducts = () => {
	for (let each of singleProduct) {
		each.classList.add('hidden');
		refreshVisibleProducts();
		if (matchingCheckbox()) {
			if (pickingMatch(each)) {
				each.classList.remove('hidden');
				refreshVisibleProducts();
			}
		} else {
			each.classList.remove('hidden');
			refreshVisibleProducts();
		}
	}
};

// -------------------- Search per category filter ----------------

const checkboxes = document.querySelectorAll("input[type='checkbox']");

// -------------------- Filter wiping -------------------

const trashButton = document.querySelector('#trash-can');

trashButton.onclick = () => {
	wipingFilter();
};

const wipingFilter = () => {
	searchingFilter.value = ' ';
	for (let checkbox of gradingFilter) {
		checkbox.checked = false;
	}
	for (let each of singleProduct) {
		if (each.classList.contains('hidden')) {
			each.classList.remove('hidden');
			refreshVisibleProducts();
		}
	}
};

//  -------------- Cart button's behaviour ---------------

const purchaseButton = document.querySelectorAll('.purchase-button');
const cart = document.querySelector('.cart > button');
const cartAmount = document.querySelector('.cart span');
const menu = document.getElementById('menu');
const overlay = document.getElementById('overlay');
const closeCartMenu = document.querySelectorAll('#close-menu');
let amount = 0;

for (let button of purchaseButton) {
	button.onclick = () => {
		amount++;

		cartAmount.textContent = `Carrito (${amount} item)`;
	};
}

cart.onclick = () => {
	if (amount === 0) {
		overlay.classList.remove('hidden');
		document.body.classList.add('no-scroll');
		menu.classList.add('show-menu');
	}
};

for (let cross of closeCartMenu) {
	cross.onclick = () => {
		overlay.classList.add('hidden');
		document.body.classList.remove('no-scroll');
		menu.classList.remove('show-menu');
	};
}

// -------------------- Products layout --------------

const listLikeButton = document.querySelector('#list-layout-button');
const gridLikeButton = document.querySelector('#grid-layout-button');
const container = document.querySelector('#list-layout');

const productDescription = document.querySelectorAll('.product-description');

gridLikeButton.onclick = () => {
	container.classList.remove('list-layout');
	container.classList.add('products-container');
	for (let each of singleProduct) {
		each.classList.remove('list-style');
		each.classList.add('grid-layout');
	}
	for (let description of productDescription) {
		description.classList.add('hidden');
	}
};

listLikeButton.onclick = () => {
	container.classList.add('list-layout');
	container.classList.remove('products-container');
	for (let each of singleProduct) {
		each.classList.add('list-style');
		each.classList.remove('grid-layout');
	}
	for (let description of productDescription) {
		description.classList.remove('hidden');
	}
};

// ------------------- Products filter from tablets and cell devices ------------

const filterButton = document.querySelector('#filters-button');
const asideMenu = document.querySelector('aside');
const closeMenuButton = document.querySelector('.close-menu');

filterButton.onclick = () => {
	asideMenu.classList.remove('small-devices-hidden');
	asideMenu.classList.add('small-devices-display');
	closeMenuButton.classList.remove('hidden');
	closeMenuButton.onclick = () => {
		asideMenu.classList.add('small-devices-hidden');
		asideMenu.classList.remove('small-devices-display');
	};
};

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
		alert('¿Qué se te ofrece?');
	}
};

// const boton = document.querySelector('#boton')

// const limpiarFiltro = () => {
//     const listaDeCheckbox = document.getElementsByClassName('filter')
//     filtroNombre.value = " "
//     for (let checkbox of listaDeCheckbox) {
//         checkbox.checked = false
//     }
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

// inputPassword.onblur = (e) => {
// console.log(e.target.value)
// es lo mismo que decir
//console.log(inputPassword.value)
// } ya que en ambos casos le pedimos el valor del input
