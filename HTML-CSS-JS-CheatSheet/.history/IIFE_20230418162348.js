//Given below are IIFE Syntaxes
//If you want to execute startup code you can use IIFE
//If you want to create to create a function that will be executed only once. You can Use IIFE
//IIFE also created a closure

let a = 10;

//IIFE 1
(function() {
    console.log(a);
    console.log("Inside IIFE 1");
})();

//IIFE 2
(() => {
    console.log(a);
    console.log("Inside IIFE 2");
})();

(async() => {
    console.log(a);
    console.log("Inside IIFE 3");
})();