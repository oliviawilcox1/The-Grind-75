// A phrase is a palindrome if, after converting all uppercase letters into lowercase letters and removing all non-alphanumeric characters, it reads the same forward and backward. 
// Alphanumeric characters include letters and numbers.
// Given a string s, return true if it is a palindrome, or false otherwise.

// Input: s = "A man, a plan, a canal: Panama"
// Output: true
// Explanation: "amanaplanacanalpanama" is a palindrome.

// Input: s = "race a car"
// Output: false
// Explanation: "raceacar" is not a palindrome.

// My Way
var isPalindrome = function(s) {
  let newString = s.replace(/[^a-z0-9]/gi, '').toLowerCase()
    let newWord = []
    for (let i = newString.length-1; i >= 0; i--) {
      newWord.push(newString[i])
    }
  
  console.log(newWord)
  let joinedReverseWord = newWord.join('')
 return joinedReverseWord=== newString ? true : false;
};
//   Concatenating 
var isPalindrome = function(s) {
    let word = s.toLowerCase().replace(/[^a-z]/gi, '');
    let newWord = ""
    
    for (let i = word.length-1; i >= 0; i--) {
      newWord = newWord + word[i]
    }
    return newWord===word ? true : false;
  };
  console.log(isPalindrome("Hello there:"))


  // Third Way
  var isPalindrome = function(s) {
    let newString = s.replace(/[^a-z0-9]/gi, '').toLowerCase()
    
    if (newString === newString.split("").reverse().join("")){
        return true
    }
    return false
};