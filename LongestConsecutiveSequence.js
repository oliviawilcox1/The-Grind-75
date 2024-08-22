// Given an unsorted array of integers nums, return the length of the longest consecutive elements sequence.

// You must write an algorithm that runs in O(n) time.

 

// Example 1:

// Input: nums = [100,4,200,1,3,2]
// Output: 4
// Explanation: The longest consecutive elements sequence is [1, 2, 3, 4]. Therefore its length is 4.
// Example 2:

// Input: nums = [0,3,7,2,5,8,4,6,0,1]
// Output: 9

var longestConsecutive = function(nums) {

    if(nums === 0 || nums.length === 0){
        return 0
    }

    let max = 0
    let count = 0

    let set = new Set(nums)
    console.log(set)
    
    for(let num of set){
        if(set.has(num-1)) continue

        let curr = num
        let count = 1

        while(set.has(curr+1)){
            curr++
            count++
        }
        
        max = Math.max(max, count)
    }
    
    return max
    
}

var longestConsecutive = function(nums) {

    if(nums.length === 0 ) return 0

    const map = new Set(nums)
    let maxLength = 0;
    
    for(let num of nums) {
 
        if(!map.has(num - 1)) {
            // start
            let currentNum = num
            let currentLength = 1

            while(map.has(currentNum + 1)){
                currentNum++
                currentLength++
            }

            maxLength = Math.max(maxLength, currentLength)

        }
    }

    return maxLength
};