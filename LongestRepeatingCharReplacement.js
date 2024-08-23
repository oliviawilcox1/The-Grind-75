// You are given a string s and an integer k. You can choose any character of the string and change it to any other uppercase English character. You can perform this operation at most k times.

// Return the length of the longest substring containing the same letter you can get after performing the above operations.

 

// Example 1:

// Input: s = "ABAB", k = 2
// Output: 4
// Explanation: Replace the two 'A's with two 'B's or vice versa.
// Example 2:

// Input: s = "AABABBA", k = 1
// Output: 4
// Explanation: Replace the one 'A' in the middle with 'B' and form "AABBBBA".
// The substring "BBBB" has the longest repeating letters, which is 4.


var characterReplacement = function(s, k) {
    let left = 0, right = 0, freqMap = {}, freqMax = 0, max = 0
    
    for(right = 0; right < s.length; right++){
        // Setting the value with the key which is the letter 
        freqMap[s[right]] = freqMap[s[right]] + 1 || 1
        freqMax = Math.max(freqMap[s[right]], freqMax)
        
        
        console.log(right, left, freqMax, max)
        
        while (right - left + 1 - freqMax > k){
               console.log(right - left + 1 - freqMax > k)
               freqMap[s[left]] -= 1;
             console.log(freqMap[s[left]])
               left++
        }
        
        max = Math.max(max, right - left + 1)
    }
     return max
};

// Great Time Complexity

var characterReplacement = function (s, k) {
    // Num of times the maximum occurring char appears
    let maxCharCount = 0, left = 0, right = 0;
      
  //   Initialize the dictionary
    const dict = {};
      
    while (right < s.length) {
        
  //  Get the character
      const char = s[right]; 
        
  //  Ternary Operator to Update the Dictionary
  //  If the character exists add to the value otherwise set it to 1 
      dict[char] ? dict[char]++ : (dict[char] = 1); 
        
  //  Update the maximum occuring char count    
      maxCharCount = Math.max(dict[char], maxCharCount); 
  
  //  Check to see if our k-changes constraint is maintained
      if (right - left + 1 - maxCharCount > k) {
        // Shorten the left
        dict[s[left]]--;
        left++;  
      }
        
     // Expand the right 
      right++; 
    }
    // Return the window size
    return right - left; 
  };

  var characterReplacement = function(s, k) {
    let res = 0;
    let left = 0;
    const map = {};

    for (let right = 0; right < s.length; right++) {
        // Add the current character to the frequency map
        const char = s[right];
        map[char] = (map[char] || 0) + 1;

        // Calculate the window size and the most frequent character's count in the current window
        const windowSize = right - left + 1;
        const maxCount = Math.max(...Object.values(map));

        // If the window is not valid (too many changes needed), shrink it
        if (windowSize - maxCount > k) {
            map[s[left]]--;
            left++;
        }

        // Update the result with the size of the current valid window
        res = Math.max(res, right - left + 1);
    }

    return res;
};
