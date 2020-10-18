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
const trashButton = document.querySelector('#trash-can');

const singleProduct = document.getElementsByClassName('product');
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
	// ------------------- First of all empty cart ------------
	cartProducts.innerHTML = '';
	for (let product of singleProduct) {
		if (product.classList.contains('in-cart')) {
			// ---------------------- Second of all container creating for chosen products --------------
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
			// -------------- Removing added product when clicking on trash can button -------------
			trashCanButton.onclick = () => {
				document.querySelector(`#${product.id}`).classList.remove('in-cart');
				updateCart();
				solveFinalAmount();
			};
			// ------------ Increasing subtotal when increasing input amount -----------
			let inputNumber = document.querySelector(`#${product.id}-amount`);
			inputNumber.onclick = () => {
				solveFinalAmount();
			};
		}
	}
};

for (let button of purchaseButton) {
	button.onclick = () => {
		let product = document.querySelector(`#${button.id}`);
		product.classList.add('in-cart');
		updateCart();
		solveFinalAmount();
	};
}

// ----------------------- After pressing "COMPRAR" button from cart menu -----------------

buyButton.onclick = () => {
	purchasePanel.classList.remove('hidden');
	menu.classList.remove('show-menu');
	solveFinalAmount();

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
	// ---------------- First of all check on every single card --------------
	for (let each of singleProduct) {
		// ------------------ Show'em all ------------------
		each.classList.remove('hidden');
		// ------------------- Check on matches between grading and category checkboxes -----------
		if (selectedCategory() && !pickingMatchedCategory(each)) {
			each.classList.add('hidden');
		}
		if (matchingCheckbox() && !pickingMatch(each)) {
			each.classList.add('hidden');
		}
		// --------------- Last of all considering searching input content -------------
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
	// --------------------- Grid-like view ----------------
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
	// --------------------- List-like view -------------------
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
	// --------------------- Visible amount for shown products when filtering -------------
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
	// -------------------- This is for filters button -------------
	filterButton.onclick = () => {
		overlay.classList.remove('hidden');
		document.body.classList.add('no-scroll');
		// ----------------- Aside menu displays (with no transition) ------------
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
const cartSubtotal = document.querySelector('.subtotal');
const cashCheckbox = document.querySelector('#cash-debit');
const total = document.querySelector('#total');
const rechargeAmount = document.querySelector('#recharge');
const rechargeCheckbox = document.querySelector('#credit-card');
const discountCheckbox = document.querySelector('#discount');
const discount = document.querySelector('.discount');
const shippingCheckbox = document.querySelector('#shipping');
const shipping = document.querySelector('.shipping');

const solveSubtotal = () => {
	// ----------------- Select every product that contains "in-cart" class -------------
	let productsInCart = document.querySelectorAll('.in-cart');
	productsSubtotal = 0;
	for (let product of productsInCart) {
		// --------- Variable declaration for input amount to be increased and reflected in subtotal -----
		let amount = +document.querySelector(`#${product.id}-amount`).value;
		productsSubtotal += +product.dataset.price * amount;
	}
	subtotal.textContent = productsSubtotal;
};

const solveFinalAmount = () => {
	solveSubtotal();

	if (rechargeCheckbox.checked) {
		rechargeValue = productsSubtotal * 0.1;
	} else if (cashCheckbox.checked) {
		rechargeValue = 0;
	}
	if (shippingCheckbox.checked) {
		shippingValue = 300;
	} else {
		shippingValue = 0;
	}
	if (discountCheckbox.checked) {
		discountValue = productsSubtotal * 0.1;
	} else {
		discountValue = 0;
	}

	const finalMath = productsSubtotal + rechargeValue + shippingValue - discountValue;

	total.textContent = `$${finalMath}`;
	subtotal.textContent = `$${productsSubtotal}`;
	cartSubtotal.textContent = `Subtotal $${productsSubtotal}`;
};

cashCheckbox.onclick = () => {
	solveFinalAmount();
	rechargeAmount.textContent = `$${rechargeValue}`;
};

rechargeCheckbox.onclick = () => {
	solveFinalAmount();
	rechargeAmount.textContent = `$${rechargeValue}`;
};

discountCheckbox.onclick = () => {
	solveFinalAmount();
	discount.textContent = `$${discountValue}`;
};

shippingCheckbox.onclick = () => {
	solveFinalAmount();
	shipping.textContent = `$${shippingValue}`;
};
