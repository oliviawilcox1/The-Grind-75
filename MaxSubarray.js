var maxSubArray = function(nums) {
    // ints 
    let currentMax = nums[0]
    let globalMax = nums[0]

    for(let i = 1; i< nums.length; i++){
        const currWindow = currentMax + nums[i]
        const currEle = nums[i]

        currentMax = Math.max(currEle, currWindow)
        globalMax = Math.max(currentMax, globalMax)
    }

    return globalMax
}