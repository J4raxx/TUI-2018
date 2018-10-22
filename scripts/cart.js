let cart = [];

console.log(document.cookie);

function addToCart(product, qty) {
	product.quantity = qty;
	cart.push(product);
	document.cookie = JSON.stringify(cart);
	console.log(cart);
}