// Given the roots of two binary trees p and q, write a function to check if they are the same or not.

// Two binary trees are considered the same if they are structurally identical, and the nodes have the same value.

 

// Example 1:


// Input: p = [1,2,3], q = [1,2,3]
// Output: true
// Example 2:


// Input: p = [1,2], q = [1,null,2]
// Output: false
// Example 3:


// Input: p = [1,2,1], q = [1,1,2]
// Output: false


// Recursive
//     Base Case is if we get down to the bottom of the tree and there were no mismatches so both roots would be null
var isSameTree = function(p, q) {
    // Recursive
        
    // Base Case to return a value for true
    //     This means we have reached the end 
        if (!p && !q) return true
        
    //     Now we need conditions for when we are moving through the tree
    //     This accounts for if there is no more p or no more q or the values dont match
        if (!p || !q || p.val !== q.val ) return false 
        
    //     Now we call the function again recursively
        return isSameTree(p.left, q.left) && isSameTree(p.right, q.right)
        
    }