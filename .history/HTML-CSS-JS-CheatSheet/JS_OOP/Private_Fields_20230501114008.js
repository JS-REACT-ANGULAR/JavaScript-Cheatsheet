const user = {
    name: "Kim",
    active: true,
    cart: [],
    purchases: []
}

function addItemsToCart(item) {
    user.cart.push(item)
}

function add3Tax() {
    let amount = user.cart.reduce((amount, item) => { return item.price * 1.03 })
}

function buyItem() {

}