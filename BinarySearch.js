///Given an array of integers nums which is sorted in ascending order, and an integer target, write a function to search target in nums. If target exists, then return its index. Otherwise, return -1.

// You must write an algorithm with O(log n) runtime complexity.


var search = function(nums, target) {

    const findNumber= (left, right) => {
        // base case 
        if( left > right) return -1

        const middle = Math.floor((left + right) / 2)

        // check for best case scenario
        if(nums[middle] === target) return middle 

        if(target > nums[middle]){
            // move left up since target is greater
            return findNumber(middle + 1, right)
        } else {
            return findNumber(left, middle -1)
        }
    }
    return findNumber(0, nums.length -1)
};
