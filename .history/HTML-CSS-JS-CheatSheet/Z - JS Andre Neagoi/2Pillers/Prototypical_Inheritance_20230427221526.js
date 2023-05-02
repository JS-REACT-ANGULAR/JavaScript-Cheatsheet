let array = [];
console.log(array.hasOwnProperty("map"));
console.log(array.__proto__.hasOwnProperty("map"));


let human = {
    mortal: true
}

sam.__proto__ = human; //Either this 
//OR
let devesh = Object.create(human) // THis

devesh.age = 30; //added devesh's own property

console.log(devesh.mortal); //true

console.log(devesh.hasOwnProperty("mortal")); // false as mortal is inherited property
console.log(devesh.hasOwnProperty("age")); //true as age is devesh's own property
console.log(human.isPrototypeOf("devesh")); //true as human is devesh's prototype (parent)