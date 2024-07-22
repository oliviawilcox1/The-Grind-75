// Given an integer array nums, return all the triplets [nums[i], nums[j], nums[k]] such that i != j, i != k, and j != k, and nums[i] + nums[j] + nums[k] == 0.

// Notice that the solution set must not contain duplicate triplets.

 

// Example 1:

// Input: nums = [-1,0,1,2,-1,-4]
// Output: [[-1,-1,2],[-1,0,1]]
// Explanation: 
// nums[0] + nums[1] + nums[2] = (-1) + 0 + 1 = 0.
// nums[1] + nums[2] + nums[4] = 0 + 1 + (-1) = 0.
// nums[0] + nums[3] + nums[4] = (-1) + 2 + (-1) = 0.
// The distinct triplets are [-1,0,1] and [-1,-1,2].
// Notice that the order of the output and the order of the triplets does not matter.
// Example 2:

// Input: nums = [0,1,1]
// Output: []
// Explanation: The only possible triplet does not sum up to 0.
// Example 3:

// Input: nums = [0,0,0]
// Output: [[0,0,0]]
// Explanation: The only possible triplet sums up to 0.

var threeSum = function(nums) {
    //We want three numbers that add up to zero
    
        
	const result =[]
//     Edge Case
    if(nums.length < 3) return result

    
//     Logic for finding triplets that add to zero 
     //As well, these indices cant be used multiple times
//     return the arrays
 //Lastly we are returning distinctive arrays as we see there are two examples 
//     if there are multiple arrays we may have to put them into another map
  
// 	First Sort the array
    nums.sort((a,b)=> a-b)
    
    for(let i = 0; i < nums.length; i++){
        let left = i+1
        let right = nums.length - 1
        if(i > 0 && nums[i] === nums[i-1]) continue
        while( left < right){
            let sum = nums[i] + nums[left] + nums[right]
            if(sum === 0){
                let arr = [nums[i], nums[left], nums[right]]
                result.push(arr)
                left++
//              I think this protects against dupes
                 while(nums[left] === nums[left-1] && left < right) left++
            } else if( sum > 0){
                right--
            } else{
                left++
            }
        }
    }

return result
    
};

var threeSum = function (nums) {
    // pointer problem since you have to keep track of many different numbers to get a sum 
    // initialize pointers 
    // sort the array 
    nums.sort((a, b) => a - b)

    const indexArrays = []

    for (let i = 0; i < nums.length - 2; i++) {
        // skip duplicate
        if (i > 0 && nums[i] === nums[i - 1]) continue;

        // also preventative of overlap
        let left = i + 1;
        let right = nums.length - 1;

        while (left < right) {
            const sum = nums[left] + nums[i] + nums[right]

            if (sum === 0) {
                indexArrays.push([nums[left], nums[i], nums[right]])

                // Skip duplicates // study 
                while (left < right && nums[left] === nums[left + 1]) left++;
                while (left < right && nums[right] === nums[right - 1]) right--;
                left++;
                right--;
            } else if (sum < 0) {
                left++
            } else {
                right--
            }
        }

    }
    return indexArrays
};