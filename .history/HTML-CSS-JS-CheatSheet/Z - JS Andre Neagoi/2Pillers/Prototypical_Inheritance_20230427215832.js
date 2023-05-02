let array = [];
console.log(array.hasOwnProperty("map"));
console.log(array.__proto__.hasOwnProperty("map"));

let obj = {};

console.log(obj.isPrototypeOf("Object"));