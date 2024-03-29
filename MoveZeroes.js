// Given an integer array nums, move all 0's to the end of it while maintaining the relative order of the non-zero elements.

// Note that you must do this in-place without making a copy of the array.

 

// Example 1:

// Input: nums = [0,1,0,3,12]
// Output: [1,3,12,0,0]
// Example 2:

// Input: nums = [0]
// Output: [0]

//checking after the fact and then swapping the index wth the one before it
var moveZeroes = function(nums) {
    
    let left = 0;
     
     for(let i = 0; i < nums.length; i++) {
         
         if(nums[i]!==0) {
             [nums[i], nums[left]] = [nums[left], nums[i]];
             left++;
         }
     }
     return nums;
 };
 
//  Another approach i prefer alot more
let moveZeroes = function(nums) {
    for(let i= nums.length-1; i>=0; i--){
        if(nums[i]===0){
            nums.push(0) 
            nums.splice(i,1)
        }
    }
    return nums
};
