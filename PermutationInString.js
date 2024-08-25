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





var checkInclusion = function(s1, s2) {
    const s1Map = {};
    const s2Map = {};
    const maxSize = s1.length;
    let left = 0;

    for (let char of s1) {
        s1Map[char] = (s1Map[char] || 0) + 1;
    }

    for (let right = 0; right < s2.length; right++) {
        const s2Char = s2[right];
        s2Map[s2Char] = (s2Map[s2Char] || 0) + 1;


        if (right - left + 1 === maxSize) {
            if (areMapsEqual(s1Map, s2Map)) {
                return true;
            }

            // check if it should be deleted
            const charToRemove = s2[left];
            if (s2Map[charToRemove] === 1) {
                delete s2Map[charToRemove];
            } else {
                s2Map[charToRemove]--;
            }
            left++;
        }
    }

    // Helper function to compare two maps
    function areMapsEqual(map1, map2) {
        const keys1 = Object.keys(map1);
        const keys2 = Object.keys(map2);
        if (keys1.length !== keys2.length) {
            return false;
        }
        for (let key of keys1) {
            if (map1[key] !== map2[key]) {
                return false;
            }
        }
        return true;
    }

    return false;
};