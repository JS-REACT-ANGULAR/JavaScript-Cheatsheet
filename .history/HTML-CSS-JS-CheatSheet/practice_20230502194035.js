const isChefThere = true;
const doWeHaveIngredients = false;

//--------Callback-------------

function restaurant(cookingFood, sorryNotCooking) {
    if (isChefThere && doWeHaveIngredients) {
        cookingFood("Food is cooked.");
    } else if (!isChefThere) {
        sorryNotCooking("Sorry, Chef is not there.")
    } else {
        sorryNotCooking("Sorry, we ran out of food.")
    }
}

restaurant((message) => {
    console.log("Awesome! : " +
        message);
}, (errorMessage) => {
    console.log("Can't Deliver: " +
        errorMessage);
})


//--------Promise----------------

let restaurantPromise = new Promise((resolve, reject) => {
    if (isChefThere && doWeHaveIngredients) {
        resolve("Food is cooked.")
    }
})