// Given the root of a binary tree and an integer targetSum, return true if the tree has a root-to-leaf path such that adding up all the values along the path equals targetSum.

// A leaf is a node with no children.



var hasPathSum = function(root, targetSum) {
       if (!root) return false;

    const searchForSum = (node, sum) => {
        sum += node.val
        // base case 
        if(!node.left && !node.right){
           return sum === targetSum;
        }
        
        // check left
        if(node.left && searchForSum(node.left, sum)) {
            return true
        }

        // check right
        if(node.right && searchForSum(node.right, sum)){
            return true
        }

        return false
    }

    return searchForSum(root, 0)
};