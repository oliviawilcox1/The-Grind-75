// Given the root of a binary tree, invert the tree, and return its root.

 

// Example 1:


// Input: root = [4,2,7,1,3,6,9]
// Output: [4,7,2,9,6,3,1]
// Example 2:


// Input: root = [2,1,3]
// Output: [2,3,1]
// Example 3:

// Input: root = []
// Output: []

// Binary Search
var invertTree = function(root) {
    
    let queue = []
    
    if(root!= undefined) {
        queue.push(root);
    }
    while( queue.length > 0){
        let current = queue.shift()
        let temp = current.left
        current.left = current.right
        current.right = temp

    if( current.left != undefined){
        queue.push(current.left)
    }
    if( current.right != undefined){
        queue.push(current.right)
    }
    
    }
    return root 
}


// Recursion - Way better time complexity 
const invertTree = (root) => {
    //     recursive function 
    //     we always need a base case 
    //     Our base case would essentially be where there is no more nodes so this is saying if our root is null return the root
        if (!root) return root
    //     Now we need logic for reversing the tree
        let temp = root.left
        root.left = root.right
        root.right = temp
        
        invertTree(root.left)
        invertTree(root.right)
        
        return root
    };
    
    // BEST WAY
    var invertTree = function(root) {    
        const invert = (node) => {
            
            if(!node) return node
            
            let left = node.left
            let right = node.right
            node.left = right
            node.right = left
            
            invert(node.left)
            invert(node.right)
            
        }
        invert(root)
        return root
    }