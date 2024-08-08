// Given the root of a binary tree, return its maximum depth.

// A binary tree's maximum depth is the number of nodes along the longest path from the root node down to the farthest leaf node.

 

// Example 1:


// Input: root = [3,9,20,null,null,15,7]
// Output: 3
// Example 2:

// Input: root = [1,null,2]
// Output: 2

var maxDepth = function(root) {
    //     We know its a DFS Search and therefore it will be recursive 
        
        const traverse = (node) => {
             
            if(!node) return 0
    
            let left = traverse(node.left) + 1
            let right = traverse(node.right) + 1
            return Math.max(left, right)
            
        }
        let result = traverse(root)
        return result
    };
// Another Option
var maxDepth = function(root) {
    //     We know its a DFS Search and therefore it will be recursive 
        
        if (!root) return 0
        
        let left = maxDepth(root.left) + 1
        let right = maxDepth(root.right) + 1
        return Math.max(left,right)
        
    };

// More Succinct
var maxDepth = function(root) {
//     We know its a DFS Search and therefore it will be recursive 
    if (!root) return 0
    return Math.max(maxDepth(root.left), maxDepth(root.right)) + 1;
    
};

var maxDepth = function(root) {
    
    if(!root) return 0

    const findMax = (node, sum ) => {
 
        if(!node) return 0

        if(!node.left && !node.right) return 1
        
        return 1 + Math.max(findMax(node.left), findMax(node.right))

    }

    return findMax(root)
};