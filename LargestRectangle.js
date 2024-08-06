// 84. Largest Rectangle in Histogram
// Companies
// Given an array of integers heights representing the histogram's 
//bar height where the width of each bar is 1, return the area of the largest 
//rectangle in the histogram.

var largestRectangleArea = function(heights) {
    const stack = []
    let biggestArea = 0
    // I think the stack is to track the highest number if its greater 
    for(let i = 0; i <= heights.length; i++) {
        const height = i === heights.length ? 0 : heights[i]; 

        while(stack.length > 0 && heights[stack[stack.length-1]] > height ){
            const top = stack.pop()
            const width = stack.length === 0 ? i : i - stack[stack.length - 1] - 1;
            const area = heights[top] * width
            biggestArea = Math.max(biggestArea, area)
        }

        stack.push(i)
    }

    return biggestArea
};