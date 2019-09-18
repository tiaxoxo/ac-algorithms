//Find the Longest Word in a String

//Return the length of the longest word in the provided sentence.

//Your response should be a number.

//Here are some helpful links:

//String.split() https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/split
//String.length https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/length

//TEST CASES
// findLongestWord("The quick brown fox jumped over the lazy dog");
// findLongestWord("The quick brown fox jumped over the lazy dog") should return a number.
// findLongestWord("The quick brown fox jumped over the lazy dog") should return 6.
// findLongestWord("May the force be with you") should return 5.
// findLongestWord("Google do a barrel roll") should return 6.
// findLongestWord("What is the average airspeed velocity of an unladen swallow") should return 8.
// findLongestWord("What if we try a super-long word such as otorhinolaryngology") should return 19.
//input : a string
//output : a number
//we need to look at the length of each word, we need to compare the length of each word with the word with the others in the string. If a word is longer then the one that comes before it, we wll replace the value of its length.
// Tools: a variable to store the length of the longest string
//.split to chage our string and turns it into an array
//for loop : run through the words
//condtional statement: checkto see if the next word is longer than the length stored in the variable
//if true, i want to replace the value of the variable with the length of the longer word.

function findLongestWord(str) {
  var longestWord = 0;
  var wordSplit = str.split(' '); //must have a space btwn the ' ' or it wont run thru the words
    for(var i = 0; i < wordSplit.length; i++){
    if(wordSplit[i].length > longestWord){
    longestWord = wordSplit[i].length;
       }
    }
    return longestWord;
  }
  findLongestWord ('Google do a barrel roll')
 

