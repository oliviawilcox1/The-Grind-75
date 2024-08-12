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
        }
        string += s[i]  // add each letter to our string to evaluate in the nexter iteration.

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



const lengthOfLongestSubstring = (s) => {
    // reference to what is needed to update maxLen
    let tempMax = 0 
    // initalize at 0 
    let maxLen = 0;
    // use Map data structure due to ease of .get() and .set() methods 
    const map = new Map();   
  
    for(let i = 0; i < s.length; i++) { 
        const char = s[i]; 
      
        // check to see if character has been encountered before. if so, and the index was equal to or greater than the current tempMax, reset tempMax to index it was seen plus 1. 
        // important because if the index it was last seen is less than tempMax that means tempMax isn't incremented up, making it easier to use it to update our maxLen below
        // if it was encountered at a high index that means it will be harder to increase our maxLen since there is a repeat character pretty close to the current character
        // new characters don't result in tempMax being increased since the lookup returns undefined which will return false for the evaluation
        // this makes it easy for maxLen to be increased since that calculation looks at the index we are currently at which will always be pretty high since the loop always moves right
        if (map.get(char) >= tempMax) { 
            tempMax = map.get(char) + 1; 
        }

        // always update the index number we saw a character in the map 
        map.set(char, i); 
      
        // use tempMax to determine to update maxLen or not. adding 1 here offsets the addition of 1 when tempMax is recalculated
        // its used to determine if adding the current character is to our advantage or not as tempMax holds a reference to how far away our last repeat is
        // subtracting current index from how far away last repeat gives us that difference and the 1 says to update or not. note it has to be greater for it to be worth updating
        maxLen = Math.max(maxLen, i - tempMax + 1) 
    }

    return maxLen
}

var lengthOfLongestSubstring = function(s) {

    let curString = ""
    let max = 0
    

    for(let i = 0; i < s.length; i++) {
        // console.log(s[i])
        // console.log(max)
        // check if the current string has 
        if(curString.includes(s[i])){
            const index = curString.indexOf(s[i])
            curString = curString.slice(index + 1)
        }

        curString += s[i]
        max = Math.max(max, curString.length)
    }
    console.log(max)
    console.log(curString)

    return max
};