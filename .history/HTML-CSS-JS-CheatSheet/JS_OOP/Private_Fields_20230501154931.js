const user = {
    name: "Kim",
    active: true,
    cart: [],
    purchases: []
}

const Phone = {
    itemName: "Samsung",
    price: 900
}

const TV = {
    itemName: "LG",
    price: 800
}

const Laptop = {
    itemName: "Acer",
    price: 1000
}


function addItemsToCart(item) {
    user.cart.push(item);
}

function purchaseItems(item) {
    user.cart.push(item);
}