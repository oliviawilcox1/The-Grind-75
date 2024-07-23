// Two Sum 
// Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

// You may assume that each input would have exactly one solution, and you may not use the same element twice.

// You can return the answer in any order.

// Example 1:

// Input: nums = [2,7,11,15], target = 9
// Output: [0,1]
// Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].
// Example 2:

// Input: nums = [3,2,4], target = 6
// Output: [1,2]
// Example 3:

// Input: nums = [3,3], target = 6
// Output: [0,1]

// Constraints:

// 2 <= nums.length <= 104
// -109 <= nums[i] <= 109
// -109 <= target <= 109
// Only one valid answer exists.


// First Way to Solve
var twoSum = function(nums, target) {
    if(!nums || nums.length < 1) {
        return [];
    }
    const map = new Map();
    
    for(let i = 0; i < nums.length; i++) {
        const remaining = target - nums[i];
        if(map.has(remaining)) {
            return [ map.get(remaining), i];
        }
        
        map.set(nums[i] , i);
    }
    
    return [];
};
console.log(twoSum([2,7,11,15],9))

// Second Way
var twoSum = function(nums, target) {

    if(!nums || nums.length < 1) {
        return [];
    }
  let map = {}
  for(let i =0; i < nums.length; i++){
    let difference = target - nums[i]
    
    if(map[difference] !== undefined) {
      return [map[difference], i]
    } else {
      map[nums[i]]= i
   }
  }
};

console.log(twoSum([2,7,11,15],9))



var twoSum = (nums, target) => {
  let map = new Map()
  for (let index = 0; index < nums.length; index++) {/* Time O(N) */
      const num = nums[index];
      const complement = (target - num);
      const sumIndex = map.get(complement);

      const isTarget = map.has(complement)
      if (isTarget) return [ index, sumIndex ];

      map.set(num, index);                                /* Space O(N) */
  }

  return [ -1, -1 ];
}

var twoSum = function(nums, target) {
  const map = {}
  
  for(let i=0; i< nums.length; i++) {
      const number = nums[i]
      const difference = target - nums[i]

      console.log(i, difference)

      if (map.hasOwnProperty(difference)) {

          return [i, map[difference]]; // Return results immediately
      } 
          map[number] = i
  }
  return []
};