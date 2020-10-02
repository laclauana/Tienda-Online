const cart = document.querySelector('.cart > button');
const cartAmount = document.querySelector('.cart span');
const menu = document.getElementById('menu');
const overlay = document.getElementById('overlay');
const closeCartMenu = document.querySelectorAll('#close-menu');
const purchaseButton = document.querySelectorAll('.purchase-button');
const fullCartMenu = document.querySelector('#fullcart-menu');

const searchingFilter = document.querySelector('#searching');
const gradingFilter = document.getElementsByClassName('grading-filter');
const categoryFilter = document.querySelectorAll('.category-filter');
const singleProduct = document.getElementsByClassName('product');
const trashButton = document.querySelector('#trash-can');

const listLikeButton = document.querySelector('#list-layout-button');
const gridLikeButton = document.querySelector('#grid-layout-button');
const container = document.querySelector('#list-layout');
const productDescription = document.querySelectorAll('.product-description');
const visibleProductsHeader = document.querySelector('#visible-products');
const filterButton = document.querySelector('#filters-button');

const asideMenu = document.querySelector('aside');

//  -------------- Empty cart button's behaviour ---------------

const openEmptyCart = () => {
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
};

openEmptyCart();

// --------------- Full cart button's behaviour -----------------

// Se me pisan las órdenes si activo esta función. No me sale reutilizar código a lo largo del JS porque en un montón de oportunidades hago exactamente lo mismo que en otra función, con pequeñas variaciones.
// No me sale probar dando parámetros a la función que es lo que creo que "funcionaría" valga la redundancia. Ja!

// const openFullCart = () => {
// 	let amount = amount > 0;
// 	for (let button of purchaseButton) {
// 		button.onclick = () => {
// 			amount++;

// 			cartAmount.textContent = `Carrito (${amount} item)`;
// 		};
// 	}

// 	cart.onclick = () => {
// 		if (amount > 0) {
// 			overlay.classList.remove('hidden');
// 			document.body.classList.add('no-scroll');
// 			fullCartMenu.classList.add('fullcart-menu');
// 		}
// 	};

// 	for (let cross of closeCartMenu) {
// 		cross.onclick = () => {
// 			overlay.classList.add('hidden');
// 			document.body.classList.remove('no-scroll');
// 			fullCartMenu.classList.remove('fullcart-menu');
// 		};
// 	}
// };

// openFullCart();

// -------------- Search per product filter ----------------

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

for (let checkbox of categoryFilter) {
	checkbox.onclick = () => {
		filterPerCategory();
	};
}

const selectedCategory = () => {
	for (let checkbox of categoryFilter) {
		if (checkbox.checked) {
			return true;
		}
	}
};

const pickingMatchedCategory = (each) => {
	for (let checkbox of categoryFilter) {
		if (checkbox.value === each.dataset.category && checkbox.checked) {
			return true;
		}
	}
};

// const selectAffordableCategory = (each) => {
// 	for (let checkbox of categoryFilter) {
// 		if (checkbox.dataset.shared === each.dataset.shared && checkbox.checked) {
// 			return true;
// 		}
// 	}
// };

const filterPerCategory = () => {
	for (let each of singleProduct) {
		each.classList.add('hidden');
		refreshVisibleProducts();
		if (selectedCategory()) {
			if (pickingMatchedCategory(each)) {
				each.classList.remove('hidden');
				refreshVisibleProducts();
			}
		} else {
			each.classList.remove('hidden');
			refreshVisibleProducts();
		}
	}
};

// -------------------- Filter wiping -------------------

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

// -------------------- Products layout --------------

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

// ---------------- Refreshing visible product amount ------------------------

const refreshVisibleProducts = () => {
	let visibleAmount = singleProduct.length;
	for (let each of singleProduct) {
		if (each.classList.contains('hidden')) {
			visibleAmount--;
		}
	}

	visibleProductsHeader.innerHTML = `Mostrando ${visibleAmount} producto(s) de ${singleProduct.length}`;
};

// ------------------- Products filter from tablets and cell devices -------------

const filtersForSmallDevices = () => {
	filterButton.onclick = () => {
		overlay.classList.remove('hidden');
		document.body.classList.add('no-scroll');

		asideMenu.classList.add('small-devices-display');
		asideMenu.classList.remove('small-devices-hidden');
		asideMenu.classList.add('.small-devices-showmenu');

		for (let cross of closeCartMenu) {
			cross.classList.remove('hidden');
			cross.onclick = () => {
				overlay.classList.add('hidden');
				document.body.classList.remove('no-scroll');

				asideMenu.classList.remove('small-devices-display');
				asideMenu.classList.add('small-devices-hidden');
				asideMenu.classList.remove('.small-devices-showmenu');
				menu.classList.remove('show-menu');
			};
		}
	};
};

filtersForSmallDevices();

// ------------------------ Purchase panel functioning -------------------

const subtotal = document.querySelector('#subtotal');
const checkboxEfectivo = document.querySelector('#efectivo');
const total = document.querySelector('#total');
const recargoParrafo = document.querySelector('#recargo');
const checkboxTarjeta = document.querySelector('#tarjeta');
const checkboxDescuento = document.querySelector('#descuento');
const descuento = document.querySelector('.descuento');
const checkboxEnvio = document.querySelector('#envio');
const envio = document.querySelector('.envio');
// const subtotalProductos = document.querySelectorAll('.product-price');
const subtotalProductos = 5000;
// const subtotalProductos = () => {
// 	for (let precioProducto of subtotalProductos) {

// 	}
// }

const pagaEnEfectivo = () => {
	if (checkboxEfectivo.checked) {
		return true;
	} else {
		return false;
	}
};

checkboxEfectivo.onclick = () => {
	if (pagaEnEfectivo()) {
		subtotal.textContent = `$${subtotalProductos}`;
		total.textContent = `$${calcularTotal()}`;
		recargoParrafo.textContent = '$ ';
	} else {
		subtotal.textContent = '$ ';
		total.textContent = `$${subtotalProductos}`;
	}
};

const tieneDescuento = () => {
	if (checkboxDescuento.checked) {
		return true;
	} else {
		return false;
	}
};

const tieneRecargo = () => {
	if (checkboxTarjeta.checked) {
		return true;
	} else {
		return false;
	}
};

const tieneEnvio = () => {
	if (checkboxEnvio.checked) {
		return true;
	} else {
		return false;
	}
};

const obtenerRecargo = (subtotalProductos) => {
	const recargo = subtotalProductos * 0.1;
	return `$${recargo}`;
};

checkboxTarjeta.onclick = () => {
	if (tieneRecargo()) {
		recargoParrafo.textContent = obtenerRecargo(subtotalProductos);
		total.textContent = `$${calcularTotal()}`;
	} else {
		recargoParrafo.textContent = '$ ';
		total.textContent = `$${subtotalProductos}`;
	}
};

const obtenerDescuento = (subtotalProductos) => {
	return subtotalProductos - subtotalProductos * 0.1;
};

checkboxDescuento.onclick = () => {
	if (tieneDescuento()) {
		descuento.textContent = `$${subtotalProductos - obtenerDescuento(subtotalProductos)}`;
		total.textContent = `$${calcularTotal()}`;
	} else {
		descuento.textContent = '$ ';
		total.textContent = `$${calcularTotal()}`;
	}
};

const valorEnvio = 300;
checkboxEnvio.onclick = () => {
	if (tieneEnvio()) {
		envio.textContent = `$${obtenerCalculoEnvio(subtotalProductos)}`;
		total.textContent = `$${calcularTotal()}`;
	} else {
		envio.textContent = '$ ';
		total.textContent = `$${calcularTotal()}`;
	}
};

const obtenerGastoDeEnvio = (subtotalProductos) => {
	return subtotalProductos + valorEnvio;
};

const obtenerCalculoEnvio = (subtotalProductos) => {
	let envio = obtenerGastoDeEnvio(subtotalProductos) - subtotalProductos;
	return envio;
};

const calcularTotal = (subtotalProductos) => {
	if (tieneRecargo()) {
		return subtotalProductos + obtenerRecargo(subtotalProductos);
	} else if (tieneRecargo() && tieneEnvio()) {
		return subtotalProductos + obtenerRecargo(subtotalProductos) + obtenerCalculoEnvio(subtotalProductos);
	} else if (tieneRecargo() && tieneEnvio() && tieneDescuento()) {
		return subtotalProductos + obtenerRecargo(subtotalProductos) - obtenerDescuento(subtotalProductos);
	} else if (tieneRecargo() && tieneDescuento()) {
		return obtenerRecargo(subtotalProductos) - obtenerDescuento(subtotalProductos);
	} else if (pagaEnEfectivo()) {
		return subtotalProductos;
	} else if (pagaEnEfectivo && tieneEnvio()) {
		return subtotalProductos + obtenerCalculoEnvio(subtotalProductos);
	} else if (pagaEnEfectivo() && tieneDescuento()) {
		return subtotalProductos - obtenerDescuento(subtotalProductos);
	} else if (pagaEnEfectivo() && tieneDescuento() && tieneEnvio()) {
		return subtotalProductos + obtenerCalculoEnvio(subtotalProductos) - obtenerDescuento(subtotalProductos);
	}
	return (total.textContent = `$${calcularTotal(subtotalProductos)}`);
};

// calcularTotal(subtotalProductos);
