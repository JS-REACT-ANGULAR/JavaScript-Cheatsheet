let array = [];
console.log(array.hasOwnProperty("map"));
console.log(array.__proto__.hasOwnProperty("map"));


let human = {
    mortal: true
}

Devesh.__proto__ = human; //Either this 
//OR
let devesh = Object.create(human) // THis

devesh.age = 30; //added devesh's own property

console.log(devesh.mortal); //Output = false as mortal is inherited property

console.log(devesh.hasOwnProperty("mortal"));
console.log(devesh.hasOwnProperty("age"));
console.log(human.isPrototypeOf("devesh"));