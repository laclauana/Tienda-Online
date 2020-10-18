// ------------------------- Variable declaration ---------------------------

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
const emptyCart = document.querySelector('#empty-cart');
const fullCart = document.querySelector('#full-cart');
const addedProduct = document.querySelector('#added-prod');
const cartProducts = document.querySelector('.cart-products');
const buyButton = document.querySelector('#buy');
const purchasePanel = document.querySelector('#purchase-panel');
const endPurchaseButton = document.querySelector('#ending-button');
const keepOnLookingButton = document.querySelector('#keepon-looking');
const regretButton = document.querySelector('#regret');
const cancellPanel = document.querySelector('.cancell-purchase-panel');
const emptyCartButton = document.querySelector('#emptycart');
const cancellButton = document.querySelector('#cancell');

// -------------------------------------- Cart behaviour ---------------------------------------

// --------------- Cart content update -----------------

let quantity = 0;
const updateQuantity = () => {
	quantity = document.querySelectorAll('.in-cart').length;
	addedProduct.innerHTML = `${quantity} producto(s) agregado(s)`;
	cartAmount.innerHTML = `Carrito (${quantity} item)`;
	if (quantity === 0) {
		emptyCart.classList.remove('hidden');
		emptyCart.classList.add('emptycart-menu');
		fullCart.classList.add('hidden');
	}
};

// ---------------------- Cart menu layout when it's empty and when it's full --------------------

cart.onclick = () => {
	// ------------ display properties in common -------------
	overlay.classList.remove('hidden');
	document.body.classList.add('no-scroll');
	menu.classList.add('show-menu');

	for (let cross of closeCartMenu) {
		cross.onclick = () => {
			overlay.classList.add('hidden');
			document.body.classList.remove('no-scroll');
			menu.classList.remove('show-menu');
		};
	}
	// ---------------------- layout when empty --------------
	if (quantity === 0) {
		emptyCart.classList.remove('hidden');
		emptyCart.classList.add('emptycart-menu');
		fullCart.classList.add('hidden');
		// --------------------- layout when full ---------------
	} else if (quantity > 0) {
		fullCart.classList.remove('hidden');
		fullCart.classList.add('fullcart-menu');
		emptyCart.classList.add('hidden');
	}
};

// ---------------- Inner cart functioning when purchasing product ------------------

const updateCart = () => {
	updateQuantity();
	cartProducts.innerHTML = '';
	for (let product of singleProduct) {
		if (product.classList.contains('in-cart')) {
			const productInCart = document.createElement('div');
			productInCart.innerHTML = `<div class="cart-products cart-item">
			<div>
			<img src=${product.dataset.src}>
			</div>
			<div>
			<p>${product.dataset.name}</p>
			<label> <input type="number" id=${product.id}-amount value="1"> </label>
			</div>
			<div>
			<button id=trash-can-${product.id}><i class="far fa-trash-alt"></i></button>
			<p>$${product.dataset.price}</p>
			</div>
			</div>`;

			cartProducts.appendChild(productInCart).classList.add('cart-item');

			const trashCanButton = document.querySelector(`#trash-can-${product.id}`);

			trashCanButton.onclick = () => {
				document.querySelector(`#${product.id}`).classList.remove('in-cart');
				updateCart();
				calcularTotal();
			};
			let inputNumber = document.querySelector(`#${product.id}-amount`);
			inputNumber.onclick = () => {
				calcularTotal();
			};
		}
	}
};

for (let button of purchaseButton) {
	button.onclick = () => {
		let product = document.querySelector(`#${button.id}`);
		product.classList.add('in-cart');
		updateCart();
		calcularTotal();
	};
}

// ----------------------- After pressing "COMPRAR" button from cart menu -----------------

buyButton.onclick = () => {
	purchasePanel.classList.remove('hidden');
	menu.classList.remove('show-menu');
	calcularTotal();

	endPurchaseButton.onclick = () => {
		updateQuantity();
		window.location.reload();
		return false;
	};

	keepOnLookingButton.onclick = () => {
		purchasePanel.classList.add('hidden');
		overlay.classList.add('hidden');
		document.body.classList.remove('no-scroll');
	};
};

// ----------------------- After pressing "VACIAR" button from cart menu ---------------

regretButton.onclick = () => {
	cancellPanel.classList.remove('hidden');
	cancellButton.onclick = () => {
		cancellPanel.classList.add('hidden');
	};
};
emptyCartButton.onclick = () => {
	for (let product of singleProduct) {
		product.classList.remove('in-cart');
	}
	updateCart();
	cancellPanel.classList.add('hidden');
};

//--------------------------------------------- Main Filtering Function ----------------------------------------------

const filter = () => {
	for (let each of singleProduct) {
		each.classList.remove('hidden');
		if (selectedCategory() && !pickingMatchedCategory(each)) {
			each.classList.add('hidden');
		}
		if (matchingCheckbox() && !pickingMatch(each)) {
			each.classList.add('hidden');
		}
		if (!each.dataset.name.toLowerCase().includes(searchingFilter.value)) {
			each.classList.add('hidden');
		}
	}
};

// -------------- Search per product filter ----------------

searchingFilter.oninput = () => {
	filter();
};

// ------------------- Search per grading filter ---------------------

for (let checkbox of gradingFilter) {
	checkbox.onclick = () => {
		filter();
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

// -------------------- Search per category filter ----------------

for (let checkbox of categoryFilter) {
	checkbox.onclick = () => {
		filter();
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

// -------------------- Filter wiping -------------------

trashButton.onclick = () => {
	searchingFilter.value = '';
	for (let checkbox of gradingFilter) {
		checkbox.checked = false;
	}
	for (let checkbox of categoryFilter) {
		checkbox.checked = false;
	}
	for (let each of singleProduct) {
		each.classList.remove('hidden');
		refreshVisibleProducts();
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

// ---------------------- Products filter from tablets and cell devices ----------------

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
			};
		}
	};
};

filtersForSmallDevices();

// ---------------------------------- Purchase panel functioning ---------------------------------

const subtotal = document.querySelector('#subtotal');
const subtotalCarrito = document.querySelector('.subtotal');
const checkboxEfectivo = document.querySelector('#cash-debit');
const total = document.querySelector('#total');
const recargoParrafo = document.querySelector('#recharge');
const checkboxTarjeta = document.querySelector('#credit-card');
const checkboxDescuento = document.querySelector('#discount');
const descuento = document.querySelector('.discount');
const checkboxEnvio = document.querySelector('#shipping');
const envio = document.querySelector('.shipping');
let subtotalProductos = 0;
let valorTotal = 0;
let valorEnvio = 300;
let valorRecargo = 0;
let valorDescuento = 0;

const calcularSubtotal = () => {
	let productsInCart = document.querySelectorAll('.in-cart');
	subtotalProductos = 0;
	for (let product of productsInCart) {
		let amount = +document.querySelector(`#${product.id}-amount`).value;
		subtotalProductos += +product.dataset.price * amount;
	}
	subtotal.textContent = subtotalProductos;
};

checkboxEfectivo.onclick = () => {
	calcularTotal();
	recargoParrafo.textContent = `$${valorRecargo}`;
};

checkboxTarjeta.onclick = () => {
	calcularTotal();
	recargoParrafo.textContent = `$${valorRecargo}`;
};

checkboxDescuento.onclick = () => {
	calcularTotal();
	descuento.textContent = `$${valorDescuento}`;
};

checkboxEnvio.onclick = () => {
	calcularTotal();
	envio.textContent = `$${valorEnvio}`;
};

const calcularTotal = () => {
	calcularSubtotal();

	if (checkboxTarjeta.checked) {
		valorRecargo = subtotalProductos * 0.1;
	} else if (checkboxEfectivo.checked) {
		valorRecargo = 0;
	}
	if (checkboxEnvio.checked) {
		valorEnvio = 300;
	} else {
		valorEnvio = 0;
	}
	if (checkboxDescuento.checked) {
		valorDescuento = subtotalProductos * 0.1;
	} else {
		valorDescuento = 0;
	}

	const valorTotal = subtotalProductos + valorRecargo + valorEnvio - valorDescuento;

	total.textContent = `$${valorTotal}`;
	subtotal.textContent = `$${subtotalProductos}`;
	subtotalCarrito.textContent = `Subtotal $${subtotalProductos}`;
};
