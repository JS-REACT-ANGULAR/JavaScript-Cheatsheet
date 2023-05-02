function abc() {
    console.log("calling abc");
}

abc();
abc.call(); //Every function has call() property that helps it call
abc.apply(); // Here Call apply do the same thing

let italianCook = {
    name: "Gennaro",
    ingredient1: "Pasta",
    ingredient2: "Palak Paneer",
    cookPasta() {
        console.log(this.ingredient1 + " is cooked.");
    }
}