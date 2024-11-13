var numTriplets = function(nums1, nums2) {

    function count(tar, nums) {
        const counts = new Map()
        let counter = 0

        for(const num of nums) {
            if(tar % num === 0){
                const com = tar / num
                if(counts.has(com)){
                    counter += counts.get(com)
                }
            }
            counts.set(num, (counts.get(num) || 0) + 1);
        }
        return counter
    }
    let total = 0

    for(let num of nums1){
        console.log(num)
        const square = num * num
        const vals = count(square, nums2)
        total += vals
    }

        for(let num of nums2){
        console.log(num)
        const square = num * num
        const vals = count(square, nums1)
        total += vals
    }

    return total
};