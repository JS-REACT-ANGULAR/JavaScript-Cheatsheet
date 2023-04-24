//Given below are IIFE Syntaxes
//If you want to execute startup code you can use IIFE

(function() {
    console.log("Inside IIFE 1");
})();

(() => {
    console.log("Inside IIFE 2");
})();

(async() => {
    console.log("Inside IIFE 3");
})();