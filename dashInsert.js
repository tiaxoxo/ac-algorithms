/*

Given a number, insert dashes ('-') between each two odd numbers and return it as a string
Remember 0 is an even number. Assume the input will contain at least 1 digit.

Hint: Check out toString() method at
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/toString

*/

/**
Examples:

var result = dashInsert("454793");
console.log(result) // "4547-9-3"

var result = dashInsert("44");
console.log(result) // "44"

var result = dashInsert("0");
console.log(result) // "0"

var result = isBigger("13");
console.log(result) // "1-3"

**/
// use a var to store the output string
//create a var to store the transformation of the number to an array of numbers first to a string and then to an array, tools: .toString() .split()
//create a for loop to go thru each of the numbers in array
// need conditional statement that will test if teh number is odd && if the number after it is odd
//if true I want to add the number

  function DashInsert(num){
	  var output ="";
	  var array = num.toString().split('');
	  for (var i =0; i< array.length; i++);{
		  if (array[i] % 2 === 1 && output[i+1] % 2 == 1);{
			  output = output + array[i] + "-";
			  else{
				  output = ouput + array [i];
			  }
		  }
	  }
	  return output;
  }
  DashInsert(34567);