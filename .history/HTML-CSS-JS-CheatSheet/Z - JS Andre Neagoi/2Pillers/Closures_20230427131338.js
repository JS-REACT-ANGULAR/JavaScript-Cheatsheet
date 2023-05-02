  function a(num1) {
      return function b(num3) {
          return function c(num2) {
              console.log(num1 + "  " + num2);
          }
      }
  }

  const a = (num1) => (num3) => (num2) => console.log(num1 + "  " + num2 + " " + num3);

  a(10)()(20) //10  20 undefined


  function init(age) {
      let name = "Devesh"; // name is a local variable created by init
      function displayName() {
          // displayName() is the inner function, that forms the closure
          console.log("Name: " + name + ",  Age: " + age); // use variable declared in parent function & recieved as arg
      }
      displayName();
  }
  init(30); //Name: Devesh,  Age: 30