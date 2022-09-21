// Given two strings s1 and s2, return true if s2 contains a permutation of s1, or false otherwise.

// In other words, return true if one of s1's permutations is the substring of s2.

 

// Example 1:

// Input: s1 = "ab", s2 = "eidbaooo"
// Output: true
// Explanation: s2 contains one permutation of s1 ("ba").
// Example 2:

// Input: s1 = "ab", s2 = "eidboaoo"
// Output: false

var checkInclusion = function(s1, s2) {
    
    const map = {};
    let count = s1.length;
    
    for (const c of s1) {
        if (!map[c]) map[c] = 0;
        map[c]++;
        
    }
    console.log(map)
    
    let l = 0;
    let i = 0;
    
    while (i < s2.length) {
        const char = s2[i];
        
        if (map[char]) {
            if (count === s1.length) l = i;
            map[char]--;
            count--;
            if (count === 0) return true;
            i++;
        } else {
            if (count === s1.length) {
                i++;
            } else {
                map[s2[l]]++;
                count++;
                l++;
            }
        }
    }
    
    return false;
};


