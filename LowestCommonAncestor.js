// Given a binary search tree (BST), find the lowest common ancestor (LCA) node of two given nodes in the BST.

// According to the definition of LCA on Wikipedia: “The lowest common ancestor is defined between two nodes p and q as the lowest node in T that has both p and q as descendants (where we allow a node to be a descendant of itself).”

 

// Example 1:


// Input: root = [6,2,8,0,4,7,9,null,null,3,5], p = 2, q = 8
// Output: 6
// Explanation: The LCA of nodes 2 and 8 is 6.
// Example 2:


// Input: root = [6,2,8,0,4,7,9,null,null,3,5], p = 2, q = 4
// Output: 2
// Explanation: The LCA of nodes 2 and 4 is 2, since a node can be a descendant of itself according to the LCA definition.
// Example 3:

// Input: root = [2,1], p = 2, q = 1
// Output: 2

var lowestCommonAncestor = function(root, p, q) {
    // The logic behind this problem is to return the node that has a descendant with p and q 
    // We need to traverse down tree and return current node which will be the lwoest common ancestor 
    // this naturally happens by rules of BSTs so both p and q need to be either greater or less than the value to traverse down the tree otherwise the root satisfies conditions 
// easiest way to check and not end up with a ton of conditionals is starting at curr and if both p and q are greater than we traverse and if they are not greater or lesser return curr as it is lowest common ancestor 

    let curr = root

    while(curr){
        // If they are both bigger than traverse to see who is LCA
        if(p.val > curr.val && q.val > curr.val){
            curr = curr.right
        } else if (p.val < curr.val && q.val < curr.val){
            curr = curr.left
        } else {
            return curr
        }
    }

};