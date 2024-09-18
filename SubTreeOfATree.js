// Given the roots of two binary trees root and subRoot, return true if there is a subtree of root with the same structure and node values of subRoot and false otherwise.

// A subtree of a binary tree tree is a tree that consists of a node in tree and all of this node's descendants. The tree tree could also be considered as a subtree of itself.

 

// Example 1:


// Input: root = [3,4,5,1,2], subRoot = [4,1,2]
// Output: true
// Example 2:


// Input: root = [3,4,5,1,2,null,null,null,null,0], subRoot = [4,1,2]
// Output: false

var isSubtree = function(root, subRoot) {
//     We want to return true if they match 
    // false otherwise 
    // first check 
    // recursive 
    
    // if root doesnt exist return false 
    // if they match return true 
    // else recursive 
    
    if (root == null){
        return false
    } else if (isMatch(root, subRoot)){
            return true
    } else {
        return isSubtree(root.left, subRoot) || isSubtree(root.right, subRoot)
    }
    
    
    
    function isMatch(root, subRoot) {
//         if root is null and sub isnt 
//         if root is not null and sub is 
//         if they match 
//         this conditional is returned in a way that if they are both null its true 
        if (root === null || subRoot === null) {
            return root === null && subRoot === null
        } else if ( root.val === subRoot.val ){
            return isMatch(root.left, subRoot.left) && isMatch(root.right, subRoot.right)
        } else {
            return false
        }
        
    }
};
    

var isSubtree = function(root, subRoot) {
    function helperFunc (tree, subtree) {
        // Base cases
        if(tree === null && subtree === null) {
            return true;
        }

        if(tree === null || subtree === null) {
            return false;
        }

        if(tree.val !== subtree.val) {
            return false;
        }

        // Recursively check the left and right subtrees
        return helperFunc(tree.left, subtree.left) && helperFunc(tree.right, subtree.right);
    }

    function check(tree, subtree) {
        if(tree === null) {
            return false;  // No subtree can exist in a null tree
        }

        // If the current node matches the subtree root, check structure
        if(tree.val === subtree.val && helperFunc(tree, subtree)) {
            return true;
        }

        // Continue checking the left and right subtrees
        return check(tree.left, subtree) || check(tree.right, subtree);
    }

    // Return the result of the check
    return check(root, subRoot);
};