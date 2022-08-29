// Given two sorted arrays nums1 and nums2 of size m and n respectively, return the median of the two sorted arrays.

// The overall run time complexity should be O(log (m+n)).


// This is the way I solved this problem - However the time complexity is dependant on the web browser
//  so Firefox could use Mergesort wiht O (nlog n) and Google Chrom uses Timsort(hyprid of merge and insertion)
// which is also O(nlogn) however best case is O(n)

var findMedianSortedArrays = function(nums1, nums2) {
    
    let newArray = nums1.concat(nums2)
    let newSortedArray = newArray.sort(function(a,b) { return a - b })
//     this gives [1,2,3]
    
    //if its odd
    if(newSortedArray.length %2 !== 0) {
        let oddIndex = Math.floor(newSortedArray.length / 2)
        return newSortedArray[oddIndex]
    } else {
//         return an even index
//         find average of two middle values
//         [1,2,3,4]
        let topIndex = newSortedArray.length/2
        let bottomIndex = topIndex - 1
        let average = (newSortedArray[bottomIndex] + newSortedArray[topIndex]) / 2
        return average 
    }
};





// Linear Search 
var findMedianSortedArrays = function(nums1, nums2) {
    const mergedArray = [];
    let arr1cursor = 0;
    let arr2cursor = 0;
    // while the cursor is less than the length of either array
  // ex) if 0 is less than 1 which is true, essentially this states that either item of the array has at least one item in it
    while (arr1cursor < nums1.length || arr2cursor < nums2.length) {
      // if the length of array 1 is 0 push the 0 index value of array 2
        if (arr1cursor === nums1.length) {
            mergedArray.push(nums2[arr2cursor]);
            arr2cursor++;
            continue;
        } 
       // if the length of array 2 is 0 push the 0 index value of array 1
        if (arr2cursor === nums2.length) {
            mergedArray.push(nums1[arr1cursor]);
            arr1cursor++;
            continue;
        }

      // if the value is the same push the value of the first array then the second and increment 
        if (nums1[arr1cursor] === nums2[arr2cursor]) {
            mergedArray.push(nums1[arr1cursor], nums2[arr2cursor]);
            arr1cursor++;
            arr2cursor++;
        // Else we do a comparison to see if the value of the first array is greater 
        } else if (nums1[arr1cursor] > nums2[arr2cursor]) {
            mergedArray.push(nums2[arr2cursor]);
            arr2cursor++;
        } else {
            mergedArray.push(nums1[arr1cursor]);
            arr1cursor++;
        }
    }
// equations to solve the median 
  console.log("length", mergedArray.length)
  console.log("array", mergedArray)
  console.log("is it true", mergedArray.length % 2)
    if (mergedArray.length % 2 !== 0 ) {
      return mergedArray[Math.floor(mergedArray.length / 2)];
    } else {
      return (mergedArray[mergedArray.length/2] + mergedArray[mergedArray.length/2 - 1])/2;
    }
};


console.log(findMedianSortedArrays([1,2,5,5], [2,4]))