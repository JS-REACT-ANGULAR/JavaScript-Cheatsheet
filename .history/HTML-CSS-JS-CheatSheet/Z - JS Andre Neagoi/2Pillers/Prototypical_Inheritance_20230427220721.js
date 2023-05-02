let array = [];
console.log(array.hasOwnProperty("map"));
console.log(array.__proto__.hasOwnProperty("map"));

let human = {
    mortal: true
}


// Devesh.__proto__ = human;



let devesh = Object.create(human)
devesh.hasOwnProperty(mortal)
console.log(devesh.mortal);