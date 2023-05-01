  function a(num1) {
      return function b(num3) {
          return function c(num2) {
              console.log(num1 + "  " + num2 + " " + num3);
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

  //---------------

  //Let's take a look at a function inside another function

  let globalVariable = "I am global Variable";

  function outerFunction(outerVariable1) {
      let outerVariable2 = "I am Outer Variable 2";
      return function innerFunction(innerVariable) {
          console.log(globalVariable);
          console.log(outerVariable1);
          console.log(outerVariable2);
          console.log(innerVariable);
      }
  }

  //In the Above example innerFunction has access to + all the variables inside outerFunction + all global variables 

  let newInnerFunction = outerFunction("I am Outer Variable 1"); //Here outerfunction has finished executing and outerVariable1 value is maintained.
  newInnerFunction("I am inner variable") // newInnerFunction still has access to all outerfunction variables due to CLOSURE. Closure helps you maintain STATE. outerVariable1 is STATE and It is maintined even after outerfunction has finished executing.

  //RESULT
  // I am global Variable
  // I am Outer Variable 1
  // I am Outer Variable 2
  // I am inner variable

  //Closure = innerFunction + access to all variables in outerFunction even if outerFunction has finished executing