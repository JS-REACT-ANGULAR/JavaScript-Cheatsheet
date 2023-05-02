const user = {
    name: "Kim",
    active: true,
    cart: [],
    purchases: []
}

let amount = 0;

function addItemsToCart(item) {
    user.cart.push(item)
}

function add3Tax() {
    user.cart.forEach(item => { return item.price * 1.03 })
}

function buyItem() {

}