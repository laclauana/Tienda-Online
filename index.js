const cart = document.querySelector('.cart > button');
const cartAmount = document.querySelector('.cart span');
const menu = document.getElementById('menu');
const overlay = document.getElementById('overlay');
const closeCartMenu = document.querySelectorAll('#close-menu');
const purchaseButton = document.querySelectorAll('.purchase-button');

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

//  -------------- Cart button's behaviour ---------------

const emptyCart = document.querySelector('#empty-cart');
const fullCart = document.querySelector('#full-cart');

const cartBehaviour = () => {
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

			emptyCart.classList.remove('hidden');
			emptyCart.classList.add('emptycart-menu');
			fullCart.classList.add('hidden');

			for (let cross of closeCartMenu) {
				cross.onclick = () => {
					overlay.classList.add('hidden');
					document.body.classList.remove('no-scroll');
					menu.classList.remove('show-menu');
				};
			}
		} else if (amount > 0) {
			overlay.classList.remove('hidden');
			document.body.classList.add('no-scroll');
			menu.classList.add('show-menu');

			fullCart.classList.remove('hidden');
			fullCart.classList.add('fullcart-menu');
			emptyCart.classList.add('hidden');

			for (let cross of closeCartMenu) {
				cross.onclick = () => {
					overlay.classList.add('hidden');
					document.body.classList.remove('no-scroll');
					menu.classList.remove('show-menu');
				};
			}
		}
	};
};

cartBehaviour();

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
		if (
			(checkbox.value === each.dataset.category && checkbox.checked) ||
			(checkbox.name === each.dataset.shared && checkbox.checked) ||
			(checkbox.name === each.dataset.plus && checkbox.checked)
		) {
			return true;
		}
	}
};

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
	for (let checkbox of categoryFilter) {
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

const buyButton = document.querySelector('#buy');
const purchasePanel = document.querySelector('#purchase-panel');
const endPurchaseButton = document.querySelectorAll('#ending-button');
const regretButton = document.querySelector('#regret');
// const subtotalProductos = document.querySelectorAll('.product-price');
const subtotalProductos = 5000;

buyButton.onclick = () => {
	purchasePanel.classList.remove('hidden');
	menu.classList.add('hidden');
	for (let button of endPurchaseButton) {
		button.onclick = () => {
			purchasePanel.classList.add('hidden');
			overlay.classList.add('hidden');
		};
		// cartAmount.textContent = `Carrito (${amount} item)`;
	}
};

regretButton.onclick = () => {
	let amount = 0;
	fullCart.classList.add('hidden');
	emptyCart.classList.remove('hidden');
	cartAmount.textContent = `Carrito (${amount} item)`;
};

// const subtotalProductos = () => {
// 	buyButton.onclick = () => {
// 		for (let precioProducto of subtotalProductos) {

// 		}
// 	};
// };

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
		total.textContent = `$${calcularTotal(subtotalProductos)}`;
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
	return recargo;
};

checkboxTarjeta.onclick = () => {
	if (tieneRecargo()) {
		recargoParrafo.textContent = `$${obtenerRecargo(subtotalProductos)}`;
		total.textContent = `$${calcularTotal(subtotalProductos)} `;
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
		total.textContent = `$${calcularTotal(subtotalProductos)}`;
	} else {
		descuento.textContent = '$ ';
		total.textContent = `$${calcularTotal(subtotalProductos)}`;
	}
};

const valorEnvio = 300;
checkboxEnvio.onclick = () => {
	if (tieneEnvio()) {
		envio.textContent = `$${obtenerCalculoEnvio(subtotalProductos)}`;
		total.textContent = `$${calcularTotal(subtotalProductos)}`;
	} else {
		envio.textContent = '$ ';
		total.textContent = `$${calcularTotal(subtotalProductos)}`;
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
	} else if (pagaEnEfectivo() && tieneEnvio()) {
		return subtotalProductos + obtenerCalculoEnvio(subtotalProductos);
	} else if (pagaEnEfectivo() && tieneDescuento()) {
		return subtotalProductos - obtenerDescuento(subtotalProductos);
	} else if (pagaEnEfectivo() && tieneDescuento() && tieneEnvio()) {
		return subtotalProductos + obtenerCalculoEnvio(subtotalProductos) - obtenerDescuento(subtotalProductos);
	}
};

calcularTotal(subtotalProductos);
