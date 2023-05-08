const isChefThere = true;
const doWeHaveIngredients = false;

function orderFood(cookingFood, errorCallBack) {
    if (isChefThere && doWeHaveIngredients) {
        cookingFood("Food is cooked.");
    } else if (!isChefThere) {
        errorCallBack("Sorry, Chef is not there.")
    } else {
        errorCallBack("Sorry, we ran out of food.")
    }
}

orderFood((message) => {
    console.log(message);
}, (message) => {
    console.log(message);
})