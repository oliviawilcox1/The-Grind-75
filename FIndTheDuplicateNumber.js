var findDuplicate = function(nums) {
    let slow = nums[0]
    let fast = nums[0]

    do {
        // console.log(nums[slow])
        slow = nums[slow];

        fast = nums[nums[fast]];
    } while (slow !== fast);


    slow = nums[0]
    while(slow !== fast){
        slow = nums[slow]
        fast = nums[fast]
    }
    return fast
};