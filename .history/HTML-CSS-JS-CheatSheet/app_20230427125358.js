function callMe() {
    var num1 = 100;

    function hello() {
        console.log(num1)
    }
    hello();
}

callMe();

for (let index = 0; index < 1; index++) {
    // if (index === 1000000000) {
    console.log("For Loop Completed")
        // }
}

if (true) {
    console.log("Inside If")
}

console.log("Another one")

// (() => { console.log("inside IIFEE") })()

class Animal {
    constructor(name) {
        this.name = name
    }

    getName() {
        return this.name;
    }
}

let animal = new Animal("Tommy");
console.log(animal.getName());