//Converting Strings to Numbers

//Number()	Returns a number, converted from its argument
//parseFloat()	Parses a string and returns a floating point number
//parseInt()	Parses a string and returns an integer

console.log(Number("3.14"), typeof Number("3.14"));
console.log(Number(Math.PI), typeof Number(Math.PI));
console.log(Number(" "), typeof Number(" "));
console.log(Number(""), typeof Number(""));
console.log(Number("99 88"), typeof Number("99 88"));
console.log(Number("John"), typeof Number("John"));

console.log(parseFloat("10"), typeof parseFloat("10"));
console.log(parseInt("10"), typeof parseInt("10"));

console.log(typeof + "10", +"10");