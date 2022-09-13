// Given the root of a binary tree, return the level order traversal of its nodes' values. (i.e., from left to right, level by level).

// Example 1:

// Input: root = [3,9,20,null,null,15,7]
// Output: [[3],[9,20],[15,7]]
// Example 2:

// Input: root = [1]
// Output: [[1]]
// Example 3:

// Input: root = []
// Output: []
var levelOrder = function(root) {
    let results = []
    if (!root) return results
    const queue = [root]
    
    while ( queue.length) {
        const currentLevelLength = queue.length
        const currentLevel = []
        
        for (let i = 0; i < currentLevelLength; i++){
            let node = queue.shift()
            currentLevel.push(node.val)
    
            if( node.left) queue.push(node.left)
            
            if(node.right) queue.push(node.right)
        }
        results.push(currentLevel)
    }
    return results
}



