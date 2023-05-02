function callMe() {
    setTimeout(() => {
        console.log("-----------Called you-------------")
    }, 0)
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

(function() { console.log("inside IIFEE") })()

class Animal {
    constructor(name) {
        this.name = name
    }
}

let animal = new Animal("Tommy");
console.log(animal.name)