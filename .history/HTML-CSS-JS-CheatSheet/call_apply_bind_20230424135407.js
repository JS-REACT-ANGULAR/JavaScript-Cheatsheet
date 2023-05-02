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
    cookPasta(spice1, spice2) {
        console.log(this.name + " has cooked " + this.ingredient1 + "with " + spice1 + ", " + spice2);
    }
}

let indianCook = {
    name: "Gennaro",
    ingredient1: "Pasta",
    ingredient2: "Palak Paneer",
    cookPalakPaneer(spice1) {
        console.log(this.name + " has cooked " + this.ingredient2 + +"with " + spice1);
    }
}

italianCook.cookPasta.call(indianCook)