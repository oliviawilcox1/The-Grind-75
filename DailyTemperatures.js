// Given an array of integers temperatures represents the daily temperatures, return an array answer such that answer[i] is the number of days you have to wait after the ith day to get a warmer temperature. If there is no future day for which this is possible, keep answer[i] == 0 instead.

 

// Example 1:

// Input: temperatures = [73,74,75,71,69,72,76,73]
// Output: [1,1,4,2,1,1,0,0]
// Example 2:

// Input: temperatures = [30,40,50,60]
// Output: [1,1,1,0]
// Example 3:

// Input: temperatures = [30,60,90]
// Output: [1,1,0]

var dailyTemperatures = function(temp) {
    // Notes: Each index represents a day so we need to subtract current index from last index when we find a higher temp
    let stack = [];
    let result = new Array(temp.length).fill(0);
// iterate through the array 
    for(let i =0; i < result.length; i++){
        // this is to check if conditions are true that will calculate the difference for how many days until hotter
        while(stack.length && temp[i]> temp[stack[stack.length-1]]){
            let x = stack.pop()
            result[x] = i - x
        }
        stack.push(i)
    }
    return result
};

var dailyTemperatures = function(temperatures) {

    const stack = []
    const result = new Array(temperatures.length).fill(0)

    for(let i = 0; i < temperatures.length; i++) {
        while (stack.length > 0 && temperatures[i] > temperatures[stack[stack.length - 1]]) {
            let j = stack.pop();
            result[j] = i - j;
        }
        stack.push(i);
    }
    return result;
};