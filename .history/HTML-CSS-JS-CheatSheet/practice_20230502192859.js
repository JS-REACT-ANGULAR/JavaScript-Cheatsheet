const isChefThere = false;
const doWeHaveIngredients = true;

function orderFood(callback, errorCallBack) {
    if (isChefThere && doWeHaveIngredients) {
        callback();
    }
}