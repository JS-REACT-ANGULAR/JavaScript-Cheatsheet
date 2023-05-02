let array = [];
console.log(array.hasOwnProperty("map"));
console.log(array.__proto__.hasOwnProperty("map"));

let human = {
    mortal: true
}

let Devesh = {}


// Devesh.__proto__ = human;

console.log(Devesh.mortal);


Devesh = Object.create(human)