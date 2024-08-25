// NOT OPTIMABLE
var maxSlidingWindow = function(nums, k) {
    
    let left = 0
    let right = 0
    let maxArr = []

    while(right < nums.length) {

        const char = nums[right]
        // console.log(char)
        let window = right - left + 1
        // console.log(window)
        if(window === k){
            let slicedElements = nums.slice(left, right + 1)
            console.log(slicedElements)
            let maxElement = Math.max(...slicedElements)
            console.log(maxElement)
            maxArr.push(maxElement)
            left++
        }
        right++
    }
    return maxArr
};

// CORRECT WAY USING DEQUEUE

var maxSlidingWindow = function(nums, k) {
    let indexDeque = []; // Stores indices of elements in decreasing order of their values
    let maxInWindows = []; // Stores the maximum values of each window

    // Iterate over each element in the array
    for (let currentIndex = 0; currentIndex < nums.length; currentIndex++) {
        // Remove indices that are out of the bounds of the current window
        if (indexDeque.length > 0 && indexDeque[0] < currentIndex - k + 1) {
            indexDeque.shift(); // Remove the front element if it's outside the window
        }

        // Remove elements from the back of the deque while the current element is larger
        // This ensures that the deque only contains indices of elements that could be the maximum
        while (indexDeque.length > 0 && nums[indexDeque[indexDeque.length - 1]] < nums[currentIndex]) {
            indexDeque.pop();
        }

        // Add the current element index to the deque
        indexDeque.push(currentIndex);

        // Add the maximum value of the current window to the result
        // Only start adding results once we have processed at least k elements
        if (currentIndex >= k - 1) {
            maxInWindows.push(nums[indexDeque[0]]);
        }
    }

    return maxInWindows;
};
