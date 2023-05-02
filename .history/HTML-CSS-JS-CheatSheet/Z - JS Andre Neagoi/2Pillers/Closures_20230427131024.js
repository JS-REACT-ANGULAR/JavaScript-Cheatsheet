//   function a(num1) {
//       return function b() {
//           return function c(num2) {
//               console.log(num1 + "  " + num2);
//           }
//       }
//   }

const a = (num1) => (num3) => (num2) => console.log(num1 + "  " + num2 + " " + num3);

a(10)()(20)


function init(age) {
    let name = "Devesh"; // name is a local variable created by init
    function displayName() {
        // displayName() is the inner function, that forms the closure
        console.log("Name: " + name + ",  Age: " + age); // use variable declared in the parent function and recieved as argument
    }
    displayName();
}
init(30);