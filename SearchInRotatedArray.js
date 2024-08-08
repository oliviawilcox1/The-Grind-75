// There is an integer array nums sorted in ascending order (with distinct values).

// Prior to being passed to your function, nums is possibly rotated at an unknown pivot index k (1 <= k < nums.length) such that the resulting array is [nums[k], nums[k+1], ..., nums[n-1], nums[0], nums[1], ..., nums[k-1]] (0-indexed). For example, [0,1,2,4,5,6,7] might be rotated at pivot index 3 and become [4,5,6,7,0,1,2].

// Given the array nums after the possible rotation and an integer target, return the index of target if it is in nums, or -1 if it is not in nums.

// You must write an algorithm with O(log n) runtime complexity.


var search = function(nums, target) {
    const left = 0
    const right = nums.length -1

    const check = (left, right) => {
        if(left > right) return -1

        const middle = Math.floor((left + right) / 2)

        if(nums[middle] === target) return middle 

          if (nums[left] <= nums[middle]) {
            // Left half is sorted
            if (nums[left] <= target && target < nums[middle]) {
                // Target is in the left sorted half
                return check(left, middle - 1);
            } else {
                // Target is in the right half
                return check(middle + 1, right);
            }
        } else {
            // Right half is sorted
            if (nums[middle] < target && target <= nums[right]) {
                // Target is in the right sorted half
                return check(middle + 1, right);
            } else {
                // Target is in the left half
                return check(left, middle - 1);
            }
        }
    }
    return check(left, right)
};