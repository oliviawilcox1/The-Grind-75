// Given an integer array nums, return an array answer such that answer[i] is equal to the product of all the elements of nums except nums[i].

// The product of any prefix or suffix of nums is guaranteed to fit in a 32-bit integer.

// You must write an algorithm that runs in O(n) time and without using the division operation.

 

// Example 1:

// Input: nums = [1,2,3,4]
// Output: [24,12,8,6]
// Example 2:

// Input: nums = [-1,1,0,-3,3]
// Output: [0,0,9,0,0]


//Best Option 

var productExceptSelf = function(nums) {
    const result = [];
    let productSoFar = 1;
    for (let i = 0; i < nums.length; i++) {
        result[i] = productSoFar
        productSoFar *= nums[i]
    }
    
    productSoFar = 1
    
    for (let j = nums.length-1; j >= 0; j--) {
        result[j] *= productSoFar
        productSoFar *= nums[j]
    }
    return result;
};








var productExceptSelf = (nums) => {
    const products = new Array(nums.length).fill(1);/* Ignore Auxillary Space O(N) */

    carryForward(nums, products); /* Time O(N) | Ignore Auxillary Space O(N) */
    carryBackward(nums, products);/* Time O(N) | Ignore Auxillary Space O(N) */

    return products;
};

var carryForward = (nums, products, product = 1) => {
    for (let index = 0; index < nums.length; index++) {/* Time O(N) */
        //This is what sets it as itself
        products[index] = product;                         /* Ignore Auxillary Space O(N) */
        product *= nums[index];
   
    }
}

var carryBackward = (nums, products, product = 1) => {
    console.log(products)
    for (let index = (nums.length - 1); 0 <= index; index--) {/* Time O(N) */
        //ex) products[3] times product 
        //so this is 6 times 1 which is 6 
        // then one times nums[3] is 4
        // Now the next iteration is products[2] which is 2 times 4 so its 8 
        // then product is 4 times 3 which is 12 
        // then products of 1 is times 12 
        // then product become 24
        products[index] *= product;                               /* Ignore Auxillary Space O(N) */
        product *= nums[index];

    }
}