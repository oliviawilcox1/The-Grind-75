var combinationSum = function(candidates, target) {

    function r(candidates, target, start, currentComb, result) {
        // if it equals targets add to arr
        if(target === 0){
            result.push([...currentComb])
            return
        }

        if(target < 0){
            return
        }
        
        for(let i = start; i < candidates.length; i++){
            const val = candidates[i]
            currentComb.push(val)
            r(candidates, target - val, i, currentComb, result); 
            currentComb.pop()
        }
    }

    const result = []
    r(candidates, target, 0, [], result)
    return result
};