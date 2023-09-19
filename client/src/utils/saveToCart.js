function saveToCart(product) {
    let cart = localStorage.getItem('cart');

    if (!cart) {
        cart = [];
    } else {
        cart = JSON.parse(cart);
    }

    cart.push(product);
    localStorage.setItem('cart', JSON.stringify(cart));
}

export default saveToCart;
