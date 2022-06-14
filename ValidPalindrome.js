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
    let word = s.toLowerCase().replace(/[^a-z]/gi, '');
      let newWord = []
      for (let i = word.length-1; i >= 0; i--) {
      newWord.push(word[i])
      }
    joinedReverseWord = newWord.join('')
   return joinedReverseWord===word ? true : false;
  };
  console.log(isPalindrome("Hello there:"))