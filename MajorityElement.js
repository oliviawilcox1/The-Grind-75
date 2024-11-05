var majorityElement = function(nums) {
    const n = nums.length
    // const isMajority = n / 2
    // console.log(isMajority)
    // // majority element appears mo
    // const count = {}

    // for(let i = 0; i < n; i++){
    //     if(!count[nums[i]]){
    //         count[nums[i]] = 0
    //     }

    //     count[nums[i]]++

    //     if(count[nums[i]] > isMajority){
    //         return nums[i]
    //     }
    // }
    let candidate = null;
    let count = 0;

    for (let num of nums) {
        if (count === 0) {
            candidate = num;
        }
        count += (num === candidate) ? 1 : -1;
    }

    return candidate;


};