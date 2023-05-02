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

console.log(parseFloat("101"), typeof parseFloat("101"));
console.log(parseInt("10"), typeof parseInt("10"));

console.log(+"15", typeof + "15");


let x = 123;

String(x) // returns a string from a number variable x
String(123) // returns a string from a number literal 123
String(100 + 23) // returns a string from a number from an expression

x.toString()
    (123).toString()
    (100 + 23).toString()

String(Date()) // returns "Thu Jul 17 2014 15:38:19 GMT+0200 (W. Europe Daylight Time)"
Date().toString() // returns "Thu Jul 17 2014 15:38:19 GMT+0200 (W. Europe Daylight Time)"