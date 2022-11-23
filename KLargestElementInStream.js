// Design a class to find the kth largest element in a stream. Note that it is the kth largest element in the sorted order, not the kth distinct element.

// Implement KthLargest class:

// KthLargest(int k, int[] nums) Initializes the object with the integer k and the stream of integers nums.
// int add(int val) Appends the integer val to the stream and returns the element representing the kth largest element in the stream.
 

// Example 1:

// Input
// ["KthLargest", "add", "add", "add", "add", "add"]
// [[3, [4, 5, 8, 2]], [3], [5], [10], [9], [4]]
// Output
// [null, 4, 5, 5, 8, 8]

// Explanation
// KthLargest kthLargest = new KthLargest(3, [4, 5, 8, 2]);
// kthLargest.add(3);   // return 4
// kthLargest.add(5);   // return 5
// kthLargest.add(10);  // return 5
// kthLargest.add(9);   // return 8
// kthLargest.add(4);   // return 8



var KthLargest = function(k, nums) {
    arr=nums.sort((a,b)=>b-a)
    n=k
};

/** 
 * @param {number} val
 * @return {number}
 */
KthLargest.prototype.add = function(val) {
    let done = false
    for(let q=arr.length-1;q>=0;q--){
        if(val<arr[q]){
            arr.splice(q+1,0,val)
            done = true
            break
        }
    }
    if (!done)arr.splice(0,0,val)
    return arr[n-1]
};