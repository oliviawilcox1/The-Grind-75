var removeElement = function(nums, val) {

    let occurunces = 0; // Pointer for the next position of the non-val element

    for (let i = 0; i < nums.length; i++) {
        if (nums[i] !== val) {
            console.log(nums)
            nums[occurunces] = nums[i];
            console.log(nums)

            occurunces++;
        }
    }

    return occurunces; // The number of elements not equal to val
};