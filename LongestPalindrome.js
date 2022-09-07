// Given a string s which consists of lowercase or uppercase letters, return the length of the longest palindrome that can be built with those letters.

// Letters are case sensitive, for example, "Aa" is not considered a palindrome here.

// Input: s = "abccccdd"
// Output: 7
// Explanation: One longest palindrome that can be built is "dccaccd", whose length is 7.

// Input: s = "a"
// Output: 1
// Explanation: The longest palindrome that can be built is "a", whose length is 1.

// My Way 
var longestPalindrome = function(s) {
    
    const characters = new Map();
     
     for (let i = 0; i < s.length; i++) {
         const char = s[i];
 
         if (characters.has(char)) {
             characters.set(char, characters.get(char) + 1);
         } else {
             characters.set(char, 1);
         }
     }
     let length = 0
     let odd = false
   characters.forEach((value, key) => {
       if( value % 2 === 0) {
           length += value
       }
       if ( value %2 === 1){
          odd = true
       }
       if ( value > 2 && value % 2 === 1) {
           length += value - 1
       }
      })
 return (odd) ? length + 1 : length
     
 }


// Another Solution
 var longestPalindrome = function(s) {
    
    const characters = new Map();
     
     for (let i = 0; i < s.length; i++) {
         const char = s[i];
 
         if (characters.has(char)) {
             characters.set(char, characters.get(char) + 1);
         } else {
             characters.set(char, 1);
         }
     }
    let odd = 0;
    let result = 0;
     
     for (const value of characters.values()) {
         result += value - value % 2;
         
         if (odd === 0 && value % 2 === 1) {
             odd = 1;
         }
     }
     
     return result + odd;
     
 }