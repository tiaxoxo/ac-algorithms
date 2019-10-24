/*

Given a string, swap the case of each character and retunr it.
Assume the string has only letters.

Hint 1: Check out indexOf() method at
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/indexOf

Hint 2: Check toLowerCase and toUpperCase methods at
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/toLowerCase
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/toUpperCase

Bonus: If the string has non-letter characters, leave them as they are.

*/
//input string
//output string
///for loop to look turn string into array -> .split
//if loop -> go thru each letter 
//if fto .lowercase conditional statement to test if its is lowercase

/**
Examples:

var result = swapCase("Hello World")
console.log(result) // "hELLO wORLD"

var result = swapCase("");
console.log(result) // ""

Bonus:
var result = swapCase("Oh, Hello!!");
console.log(result) // "oH, hELLO!!"

**/

function swapCase(str) {
	var swapCase = function (str) {
		for (var i = 0; i < str.length; i++) {
			if (str[i] === str[i].toLowerCase()) {
				str[i] = str[i].toUpperCase();
			} else {
				Str[i] = str[i].toLowerCase();
			}
		}
		console.log(str);

	}

	// var text = 'Oh, Hello!!;

	// swapCase(text);
}
var result = swapCase("Oh, Hello!!");
console.log(result) // "oH, hELLO!!"

var swapCase = function (str) {
	var newStr = "";
	for (var i = 0; i < str.length; i++) {
		if (str[i] === str[i].toLowerCase()) {
			newStr += str[i].toUpperCase();
		} else {
			newStr += str[i].toLowerCase();
		}
	}
	console.log(newStr);
	return newStr;
}

var text = 'Oh, Hello';

var swappedStr = swapCase(text); 