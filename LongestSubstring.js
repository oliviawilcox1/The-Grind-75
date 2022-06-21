// Given a string s, find the length of the longest substring without repeating characters.

// Example 1:

// Input: s = "abcabcbb"
// Output: 3
// Explanation: The answer is "abc", with the length of 3.
// Example 2:

// Input: s = "bbbbb"
// Output: 1
// Explanation: The answer is "b", with the length of 1.
// Example 3:

// Input: s = "pwwkew"
// Output: 3
// Explanation: The answer is "wke", with the length of 3.
// Notice that the answer must be a substring, "pwke" is a subsequence and not a substring.


var lengthOfLongestSubstring = function(s) {
    let longest = 0;
    let string = '';
    // if(!s || s.length === 0) return 0;
    // if(s.length === 1) return 1;
    
    
    for (let i = 0; i < s.length; i++) {
        if (string.includes(s[i])) {
            string = string.slice(string.indexOf(s[i]) + 1)  // we remove the repeated character from the front.
          console.log(string)
        }
        string += s[i]  // add each letter to our string to evaluate in the nexter iteration.
        console.log(string)
        if (string.length > longest) {
            longest = string.length    // we now update our longest substring
        }
    }
    return longest
};

console.log(lengthOfLongestSubstring("pwwkew"))

var lengthOfLongestSubstring = function(s) {
    var splitS = s.split("")
    var maxLenght = 0

    for(i=0;i<splitS.length;i++){
        let tempoKey = splitS[i]
        let runWhile = true
        let indexWhile = i + 1
      console.log(indexWhile)
      
        while(runWhile){
            if(indexWhile >= splitS.length) {
                runWhile = false
            } else {
                if(tempoKey.includes(splitS[indexWhile])) {
                    runWhile = false
                } else {
                    tempoKey += splitS[indexWhile]
                  console.log(tempoKey)
                    indexWhile = indexWhile + 1
                }
                
            }
        }
        if(maxLenght < tempoKey.length)
            maxLenght = tempoKey.length
    }
    return maxLenght
};
console.log(lengthOfLongestSubstring("abcda"))