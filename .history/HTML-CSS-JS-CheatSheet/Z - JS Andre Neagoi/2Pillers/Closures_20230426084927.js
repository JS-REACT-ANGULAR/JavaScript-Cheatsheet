//   function a(num1) {
//       return function b() {
//           return function c(num2) {
//               console.log(num1 + "  " + num2);
//           }
//       }
//   }


const a = (num1) => (num3) => (num2) => console.log(num1 + "  " + num2);

a(10)()(20)