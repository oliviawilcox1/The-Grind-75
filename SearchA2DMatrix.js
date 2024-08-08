// Write an efficient algorithm that searches for a value target in an m x n integer matrix matrix. This matrix has the following properties:

// Integers in each row are sorted from left to right.
// The first integer of each row is greater than the last integer of the previous row.
 

// Example 1:


// Input: matrix = [[1,3,5,7],[10,11,16,20],[23,30,34,60]], target = 3
// Output: true
// Example 2:


// Input: matrix = [[1,3,5,7],[10,11,16,20],[23,30,34,60]], target = 13
// Output: false

// Time Complexity is 40% faster 
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


function searchMatrix(matrix, target) {

    if (matrix.length === 0 || matrix[0].length === 0)  return false
    
    const arr = getArr();
    if (!arr)  return false; 
    return binarySearch(arr, target) !== null;
    
    // This function can be implemented using binary search as well
    function getArr() {
        for (let i = 0; i < matrix.length; i++) {
        let arr = matrix[i];
        if (arr[0] <= target && target <= arr[arr.length - 1]) {
            return arr;
        }
        }
        return null;
    }
    
    function binarySearch(arr, t) {
        let left = 0;
        let right = arr.length - 1;
        
        while (left <= right) {
        if (arr[left] === t)  return left;
        if (arr[right] === t) return right;
    
        let mid = Math.floor((left + right) / 2);
        if (arr[mid] === t) return mid;
        if (arr[mid] < t) left = mid + 1;
        else if (arr[mid] > t) right = mid - 1;   
        }
        return null;
    }
};

var searchMatrix = function(matrix, target) {
    const left = 0
     const numCols = matrix[0].length;
    const right = (matrix.length) * (numCols) -1 
    

   const searchMatrix = (left, right) => {
        // base case 
        if(left > right ) return false
        // calc middle 
        const middle = Math.floor((left + right)/ 2)
        // CALCULATE the place in the matric
        const row = Math.floor(middle / numCols)
        const col = middle % numCols
        const matrixVal = matrix[row][col]
        if(matrixVal === target) return true 

        if(target > matrixVal){
            return searchMatrix(middle + 1, right)
        } else {
            return searchMatrix(left, middle -1)
        }
        
   }
   return searchMatrix(left, right)
};