// Given a binary tree, find its minimum depth.

// The minimum depth is the number of nodes along the shortest path from the root node down to the nearest leaf node.


var minDepth = function(root) {
    if(root === null) return 0



    const trackDepth = (node) => {
        // base case 
        if(!node) {
            return Infinity
        } 

        if(!node.left && !node.right) return 1

        return 1 + Math.min(trackDepth(node.left), trackDepth(node.right))
    }
    return trackDepth(root)
};