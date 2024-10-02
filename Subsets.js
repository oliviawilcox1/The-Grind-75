// Given an integer array nums of unique elements, return all possible 
// subsets
//  (the power set).

// The solution set must not contain duplicate subsets. Return the solution in any order.

var subsets = function(nums) {
    const results = []

    const backtrack =(start, currSubset)=> {
        results.push([...currSubset])

        for(let i = start; i < nums.length; i++){
            currSubset.push(nums[i])

            backtrack(i+1, currSubset)
            currSubset.pop()
        }
    }

    backtrack(0, [])
    return results
};