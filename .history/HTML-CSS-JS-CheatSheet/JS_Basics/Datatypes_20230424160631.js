// Variable datatype is determined at runtime by value assigned.
// 3 Primitive Types - string, number, boolean.
// Other Datatypes - undefined, object
// null is object datatype


let num = 10;
let b = true;
let c = "Str"
let d;
let e = null
let f = Symbol("Just me");
let g = [];
let h = {};
let i = function func1() {}

console.log(typeof num); //number
console.log(typeof b); //boolean
console.log(typeof c); //string
console.log(typeof d); //undefined
console.log(typeof e); //object
console.log(typeof f); //symbol
console.log(typeof g); //object
console.log(typeof h); //object
console.log(typeof i); //function