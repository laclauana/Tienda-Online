//  -------------- Empty cart button's behaviour ---------------

const cart = document.querySelector('.cart > button');
const cartAmount = document.querySelector('.cart span');
const menu = document.getElementById('menu');
const overlay = document.getElementById('overlay');
const closeCartMenu = document.querySelectorAll('#close-menu');
const purchaseButton = document.querySelectorAll('.purchase-button');

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

const fullCartMenu = document.querySelector('#fullcart-menu');

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

const categoryCheckboxes = document.querySelectorAll('.category-filter');
// console.log(checkboxes);

for (let checkbox of categoryCheckboxes) {
	checkbox.onclick = () => {
		filterPerCategory();
	};
}

const selectedCategory = () => {
	for (let checkbox of categoryCheckboxes) {
		if (checkbox.checked) {
			return true;
		}
	}
};

const pickingMatchedCategory = (each) => {
	for (let checkbox of categoryCheckboxes) {
		if (checkbox.value === each.dataset.category && checkbox.checked) {
			return true;
		}
	}
};

// const selectAffordableCategory = (each) => {
// 	for (let checkbox of categoryCheckboxes) {
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

// ------------------- Products filter from tablets and cell devices ------------

const filterButton = document.querySelector('#filters-button');
const asideMenu = document.querySelector('aside');
const closeMenuButton = document.querySelector('.close-menu');

const filtersForSmallDevices = () => {
	filterButton.onclick = () => {
		asideMenu.classList.remove('small-devices-hidden');
		asideMenu.classList.add('small-devices-display');

		// for (let cross of closeCartMenu) {
		// 	cross.classList.remove('hidden');
		// 	cross.onclick = () => {
		// 		overlay.classList.add('hidden');
		// 		document.body.classList.remove('no-scroll');
		// 		menu.classList.remove('show-menu');
		// 	};
		// }

		closeMenuButton.classList.remove('hidden');
		document.body.classList.add('no-scroll');

		closeMenuButton.onclick = () => {
			document.body.classList.remove('no-scroll');
			asideMenu.classList.add('small-devices-hidden');
			asideMenu.classList.remove('small-devices-display');
		};
	};
};

filtersForSmallDevices();
