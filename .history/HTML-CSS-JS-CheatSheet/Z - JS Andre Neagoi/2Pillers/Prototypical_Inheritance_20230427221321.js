let array = [];
console.log(array.hasOwnProperty("map"));
console.log(array.__proto__.hasOwnProperty("map"));


let human = {
    mortal: true
}

Devesh.__proto__ = human; //Either this 
//OR
let devesh = Object.create(human) // THis
devesh.age = 30;

console.log(devesh.mortal);
console.log(devesh.hasOwnProperty("mortal"));
console.log(devesh.hasOwnProperty("age"));
console.log(human.isPrototypeOf("devesh"));