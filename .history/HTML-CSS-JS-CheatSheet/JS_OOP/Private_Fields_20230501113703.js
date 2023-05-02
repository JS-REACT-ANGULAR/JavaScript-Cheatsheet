const user = {
    name: "Kim",
    active: true,
    cart: [],
    purchases: []
}

function addItemsToCart(item) {
    user.cart.push(item)
}

function add3Tax(item) {
    user.cart.push(item)
}