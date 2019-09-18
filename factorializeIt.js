//Challenge time! 
//Return the factorial of the provided integer.

// If the integer is represented with the letter n, a factorial is the product of all positive integers less than or equal to n. Factorials are often represented with the shorthand notation n!

// For example: 5! = 1 * 2 * 3 * 4 * 5 = 120

// Check out Arithmetic Operators https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Arithmetic_Operators
//input - a number
//output - a number, the factorial of that number which means a product of all of the number between 1 and that number.
//use a variable to store the output (the product)
//multiplication operator (*)
//is theer js method that calculates a factorial?
//loop: we need to start at 1 and end at the number that is the parameter, and instead of adding each time in the loop we can multiply

function factorializeIt(num) {
    var result = num; //step 1. Create a variable result to store num
    if (num === 0 || num === 1) //If num = 0 OR num = 1, the factorial will return 1
      return 1; 
    while (num > 1) { // // Step 2. Create the WHILE loop 
      num--; // decreasing by 1 at each iteration
      result *= num;
    }
    return result; /// Step 3. Return the factorial of the provided integer
  }
  factorializeIt(5);
  //console.log(factorializeIt(5)) to see your result. it should be 120.
  function factorializeIt(num) {
    if (num === 0 || num === 1)
      return 1;
    for (var i = num - 1; i >= 1; i--) {
      num *= i;
    }
    return num;
  }
  factorializeIt(5);

  function factorializeIt(num) {
    var output = 1;
    for (var i = 1; i <= num; i++) {
      output= output * i;
    }
    return output;
  }
  factorializeIt(5);