const isChefThere = false;
const doWeHaveIngredients = true;

function orderFood(callback, errorCallBack) {
    if (isChefThere && doWeHaveIngredients) {
        callback("Food is cooked.");
    } else if (!isChefThere) {
        errorCallBack("Sorry, Chef is not there.")
    }
}