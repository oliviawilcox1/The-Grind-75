// Given two strings s and t, return true if t is an anagram of s, and false otherwise.

// An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.
// Input: s = "anagram", t = "nagaram"
// Output: true

var isAnagram = function(s, t) {
    console.log(s.split("").sort().join(""))
    console.log(t.split("").sort().join(""))
      return s.split("").sort().join("") ===     t.split("").sort().join("");
  };

  console.log(isAnagram(s = "rat", t = "car"))