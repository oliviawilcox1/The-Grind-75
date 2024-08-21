// Given a binary tree, determine if it is height-balanced.

 

// Example 1:


// Input: root = [3,9,20,null,null,15,7]
// Output: true
// Example 2:


// Input: root = [1,2,2,3,3,null,null,4,4]
// Output: false
// Example 3:

// Input: root = []
// Output: true







var isBalanced = function(root) {
    let boolean = true
    
    function dfs(root) {
        if(!root){
           return 0; 
        }
        let left =  dfs(root.left) + 1
        let right = dfs(root.right) + 1
        if(Math.abs(left - right) > 1){
            boolean = false;
        }
        return Math.max(left, right)
    }
    dfs(root)
    return boolean
}

var isBalanced = function(root) {
    
    function height(node) {
        if(!node) return 0

       let leftheight =  height(node.left)
       let rightheight =  height(node.right)

        if(leftheight === -1 || rightheight === -1) return -1
        if(Math.abs(leftheight - rightheight) > 1) return -1
        return Math.max(leftheight, rightheight) + 1
    }

    return height(root) !== -1
};
