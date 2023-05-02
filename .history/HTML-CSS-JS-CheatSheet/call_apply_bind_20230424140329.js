function abc() {
    console.log("calling abc");
}

abc();
abc.call(); //Every function has call() property that helps it call
abc.apply(); // Here Call apply do the same thing

//call() and apply() functions allow/enable borrowing of functionalites of other objects by another object
//call() and apply() both  can take other object as first argument who will use the functionality of first object
// Other than object, call() can take other arguments as required seperated by comma
// Other than object, apply() can take array of other aruments required

let italianCook = {
    name: "Gennaro Contaldo",
    ingredient1: "Penne Pasta",
    ingredient2: "Palak Paneer",
    cookPasta(spice1, spice2) {
        console.log(this.name + " has cooked " + this.ingredient1 + " with " + spice1 + ", " + spice2);
    },
    bakeTiramisu() {
        console.log(this.name + " has baked teramisu");
    }
}

let indianCook = {
    name: "Vikas Khanna",
    ingredient1: "Fusily Pasta",
    ingredient2: "Palak Paneer",
    cookPalakPaneer(spice1) {
        console.log(this.name + " has cooked " + this.ingredient2 + +"with " + spice1);
    },
    makeHalwa() {
        console.log(this.name + " has cooked halwa");
    }
}

italianCook.cookPasta.call(indianCook, "oregano", "basil");
italianCook.cookPasta.apply(indianCook, ["oregano", "basil"]);
indianCook.makeHalwa.call(italianCook);