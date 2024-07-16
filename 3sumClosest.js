var threeSumClosest = function(nums, target) { 
    const sortedArr = nums.sort((a,b )=> a - b)

    let closest_sum = nums[0] + nums[1] + nums[2]

    for(let i = 0; i < sortedArr.length; i++) {
        let left = i + 1
        let right = sortedArr.length - 1

        while (left < right) {
            const newSum = sortedArr[i] + sortedArr[left] + sortedArr[right]

            if (Math.abs(newSum - target) < Math.abs(closest_sum - target)) {
                closest_sum = newSum;
            }
            // what checks would you do every time 

            if(newSum === target) {
                return newSum
            } else if( newSum < target) {
                left++
            } else {
                right--
            }

        }
    }

    return closest_sum
};