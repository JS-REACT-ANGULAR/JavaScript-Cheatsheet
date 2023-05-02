  function a(num1) {
      return function b() {
          function c(num2) {
              console.log(num1 + "  " + num2);
          }
      }
  }