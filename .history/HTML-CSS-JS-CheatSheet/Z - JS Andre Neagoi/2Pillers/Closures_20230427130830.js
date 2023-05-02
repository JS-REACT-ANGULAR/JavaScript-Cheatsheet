//   function a(num1) {
//       return function b() {
//           return function c(num2) {
//               console.log(num1 + "  " + num2);
//           }
//       }
//   }

function init(age) {
    var name = "Devesh"; // name is a local variable created by init
    function displayName() {
        // displayName() is the inner function, that forms the closure
        console.log(name); // use variable declared in the parent function
    }
    displayName();
}
init();



const a = (num1) => (num3) => (num2) => console.log(num1 + "  " + num2 + " " + num3);

a(10)()(20)