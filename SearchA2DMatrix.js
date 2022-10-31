// Write an efficient algorithm that searches for a value target in an m x n integer matrix matrix. This matrix has the following properties:

// Integers in each row are sorted from left to right.
// The first integer of each row is greater than the last integer of the previous row.
 

// Example 1:


// Input: matrix = [[1,3,5,7],[10,11,16,20],[23,30,34,60]], target = 3
// Output: true
// Example 2:


// Input: matrix = [[1,3,5,7],[10,11,16,20],[23,30,34,60]], target = 13
// Output: false


var searchMatrix = function(matrix, target) {
    //   Initally you can do a nested for loop and loop through every item in the matrix but this will have horrible time complexity 
    // We want to do binary search 
        
    //     Edge Cases
        if(matrix.length === 0) return false 
    //     Now we will iterate through the rows
        for(let row of matrix){
    //         conditions
            if(row.length > 0 && row[0] <= target && row[row.length -1] >= target) {
               return binarySearch(row,target)
            }
        }
    //     after iterating through them if we do not find a match we return false
        return false    
    };
    
    function binarySearch(arr, target){
        let min = 0
        let max = arr.length 
        
        while(min < max) {
    //      Min is necessary to prevent infinite loop
            const middle = min + Math.floor((max-min)/2)
            if(arr[middle] === target) { return true }
            else {
                if (arr[middle] < target) {
                    min = middle + 1
                } else {
                    max = middle
                }
            }
        }
        return false
    }