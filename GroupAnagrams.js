// Given an array of strings strs, group the anagrams together. You can return the answer in any order.

// An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.

 

// Example 1:

// Input: strs = ["eat","tea","tan","ate","nat","bat"]
// Output: [["bat"],["nat","tan"],["ate","eat","tea"]]
// Example 2:

// Input: strs = [""]
// Output: [[""]]
// Example 3:

// Input: strs = ["a"]
// Output: [["a"]]


var groupAnagrams = function(strs) {
    let groups = {}
    strs.forEach(str => {
        
        const sortedStr = str.split('').sort().join('')
//         Assigning the keys as the sorted strings
//         and if it exists pushing it 
        if (groups[sortedStr]) {
            groups[sortedStr].push(str)
        } else {
//             Else create it
            groups[sortedStr] = [str]
        }
        
    })
    
    return Object.values(groups)
};

var groupAnagrams = function(strs) {
    // so essentially same principle - need to loop through the array - rearrange the strs and then store them in array for corresponding key then return object.values

    const map = {}
    
    for(let i = 0; i< strs.length; i++) {

        const word = strs[i].split("").sort().join("")

        if(map[word]) {
            map[word].push(strs[i])
        } else {
            map[word] = [strs[i]]
        }


    }
    return Object.values(map)
};