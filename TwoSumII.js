var twoSum = function(numbers, target) {
    
    // sorted already 
    // initialize our pointers
    let left = 0
    let right = numbers.length - 1

    const indexes = []
    while (left < right ) {
        const sum = numbers[left] + numbers[right]
        if(sum === target){
            indexes.push(left+1)
            indexes.push(right+1)
            return indexes
        } else if (sum < target) {
            left ++
        } else {
            right--
        }
    }
    return indexes
};