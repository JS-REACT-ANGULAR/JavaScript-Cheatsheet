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


function calculateTax(item) {
    let newItem = {...item };
    newItem.price = newItem.price * 1.03
    return newItem;
}

function addItemsToCart(item) {
    user.cart.push(calculateTax(item));
}

function purchaseItems() {
    user.purchases = [...user.cart];
    user.cart = []
}

addItemsToCart(TV);
addItemsToCart(Laptop)();

console.log(user);