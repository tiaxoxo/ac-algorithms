//Code Your DNA!

//The DNA strand is missing the pairing element. Take each character, get its pair, and return the results as a 2nd array.

//Base pairs are a pair of AT and CG. Match the missing element to the provided character.

//Return the provided character as the first element in each array.

//For example, for the input GCG, return [["G", "C"], ["C","G"],["G", "C"]]

//The character and its pair are paired up in an array, and all the arrays are grouped into one encapsulating array.
//input will be a string
//ouput will also be a string
//
function pairElement(str) {
  //your code here
}//Code Your DNA!

//The DNA strand is missing the pairing element. Take each character, get its pair, and return the results as a 2nd array.

//Base pairs are a pair of AT and CG. Match the missing element to the provided character.

//Return the provided character as the first element in each array.

//For example, for the input GCG, return [["G", "C"], ["C","G"],["G", "C"]]

//The character and its pair are paired up in an array, and all the arrays are grouped into one encapsulating array.
// input will be a  string
//output will be a string
//will make two vars  
//create a for loop
// create an sepearte var store  the value of the 3


function pairElement(str) {
  var dnaOutput = [];
  var dnaArr = str.split("");
  //   console.log(dnaArr);
  for (var i = 0; i < dnaArr.length; i++) {
    if (dnaArr[i] === "G") {
      dnaOutput.push(["G", "C"]);
    } else if (dnaArr[i] === "C") {
      dnaOutput.push(["C", "G"]);
    } else if (dnaArr[i] === "A") {
      dnaOutput.push(["A", "T"]);
    } else {
      dnaOutput.push(["T", "A"]);
    }
  }
  console.log(dnaOutput)
  return dnaOutput;
}
pairElement("GCG");

//TEST CASES
//pairElement("ATCGA") should return [["A","T"],["T","A"],["C","G"],["G","C"],["A","T"]].
//pairElement("TTGAG") should return [["T","A"],["T","A"],["G","C"],["A","T"],["G","C"]].
//pairElement("CTCTA") should return [["C","G"],["T","A"],["C","G"],["T","A"],["A","T"]]