// Variable datatype is determined at runtime by value assigned.
// 3 Primitive Types - string, number, boolean.
// Other Datatypes - undefined, object
// null is object datatype

//Primitive Types
let num = 10;
let bool = true;
let str = "Str"
let undef;
let nul = null
let symbol = Symbol("Just me");

//Non-Primitive Types
let array = [];
let obj = {};
let func = function func1() {}

//Primitive Types
console.log(typeof num); //number
console.log(typeof bool); //boolean
console.log(typeof str); //string
console.log(typeof undef); //undefined
console.log(typeof nul); //object
console.log(typeof symbol); //symbol

//Non-Primitive Types
console.log(typeof array); //object
console.log(typeof obj); //object
console.log(typeof func); //function


array.hello = "My God, I am Awesome";
obj.lol = "I am laughing"
console.log(array.hello)
console.log(obj.lol)