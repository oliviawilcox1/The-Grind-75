// Given the root of a binary tree, check whether it is a mirror of itself (i.e., symmetric around its center).


var isSymmetric = function(root) {
    console.log(root.val)
    const left = root.left
    const right = root.right

    const checkSymmetry = (left,right) => {
        // base case

        if(!left && !right){
            return true
        }

        if(!left || !right || left.val !== right.val) {
            return false
        }
        // check left and right side
        return checkSymmetry(left.left, right.right) && checkSymmetry(left.right, right.left)
    }
    
 
    return checkSymmetry(root.left, root.right)
    
};

