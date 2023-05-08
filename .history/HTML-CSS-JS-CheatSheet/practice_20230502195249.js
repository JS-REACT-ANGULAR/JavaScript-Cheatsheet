const isChefThere = true;
const doWeHaveIngredients = false;

//--------Callback-------------

function restaurant(cookingFood, sorryNotCooking) {
    if (isChefThere && doWeHaveIngredients) {
        cookingFood("Food is cooked.");
    } else if (!isChefThere) {
        sorryNotCooking("Sorry, Chef is not there.")
    } else {
        sorryNotCooking("We ran out of food.")
    }
}

restaurant((message) => {
    console.log("Awesome! : " + message);
}, (errorMessage) => {
    console.log("Soryy, Can't Deliver: " +
        errorMessage);
})


//--------Promise----------------

let restaurantPromise = new Promise((resolve, reject) => {
    if (isChefThere && doWeHaveIngredients) {
        resolve("Food is cooked.")
    } else if (!isChefThere) {
        reject("Sorry, Chef is not there.")
    } else {
        reject("Sorry, we ran out of food.")
    }
})

restaurantPromise.then(msg => {
        console.log(msg)
        return "Awesome! : " + msg
    })
    .then(updatedmsg => console.log(updatedmsg))
    .catch(errorMsg => console.log(errorMsg));