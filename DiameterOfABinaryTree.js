// Given the root of a binary tree, return the length of the diameter of the tree.

// The diameter of a binary tree is the length of the longest path between any two nodes in a tree. This path may or may not pass through the root.

// The length of a path between two nodes is represented by the number of edges between them.

 

// Example 1:


// Input: root = [1,2,3,4,5]
// Output: 3
// Explanation: 3 is the length of the path [4,2,1,3] or [5,2,1,3].
// Example 2:

// Input: root = [1,2]
// Output: 1

var diameterOfBinaryTree = function(root) {
    // Recursive
    let counter = 1
    count(root)
  
    function count (root) {
        //Base Case 
        if(!root) return 0
        let left =  count(root.left)
        console.log("left",left)
        let right = count(root.right)

        counter = Math.max(counter, left + right + 1)
        return Math.max(left, right) + 1
    }
    return counter - 1  
};

var diameterOfBinaryTree = function(root) {
    let diameter = 0;
 
     function height(node) {
         if (node === null) return 0;
 
         let leftHeight = height(node.left);
         let rightHeight = height(node.right);
 
         // Update the diameter at this node
         diameter = Math.max(diameter, leftHeight + rightHeight);
 
         // Return the height of this node
         return Math.max(leftHeight, rightHeight) + 1;
     }
 
     height(root); // Start the recursion from the root
 
     return diameter;
 };