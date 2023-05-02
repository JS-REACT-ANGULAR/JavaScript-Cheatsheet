let array = [];
console.log(array.hasOwnProperty("map"));
console.log(array.__proto__.hasOwnProperty("map"));

let human = {
    mortal: true
}


// Devesh.__proto__ = human;



let devesh = Object.create(human)
devesh.age = 30;

console.log(devesh.mortal);
console.log(devesh.hasOwnProperty("mortal"));
console.log(devesh.hasOwnProperty("age"));
console.log(human.isProtoTypeOf("devesh"));