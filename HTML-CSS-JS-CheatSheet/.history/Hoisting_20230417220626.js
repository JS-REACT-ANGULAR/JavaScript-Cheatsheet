//Only the Variable declaration is hoisted not their assigned values
//All variables wheather they are assigned with VAR or LET or CONST, all are hoisted

console.log(myFunction)


function myFunction() {
    console.log("Hello");
}