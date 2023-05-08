const isChefThere = true;
const doWeHaveIngredients = false;

function orderFood(cookingFood, sorryNotCooking) {
    if (isChefThere && doWeHaveIngredients) {
        cookingFood("Food is cooked.");
    } else if (!isChefThere) {
        sorryNotCooking("Sorry, Chef is not there.")
    } else {
        sorryNotCooking("Sorry, we ran out of food.")
    }
}

orderFood((message) => {
    console.log(message);
}, (message) => {
    console.log(message);
})