var isValidBST = function(root) {
    // we get a tree, we want to return a boolean
    // we want to validate the tree 
    // we want to check the left side and be sure the value is LESS than the curr or root
    // we want to check the right side and be sue the value is GREATER than the curr/ root
    // once we have reached the end return the boolean or return false immediately 


    const validateBSTTree = (root, min, max) => {

        if(root === null) {
            return true
        }


    // we want to check the left side and be sure the value is LESS than the curr or root
    // we want to check the right side and be sue the value is GREATER than the curr/ root
    // once we have reached the end return the boolean or return false immediately 

    if(root.val <= min ||  root.val >= max){
        return false
    }   

        return(

            validateBSTTree(root.left, min, root.val) && 
            validateBSTTree(root.right, root.val, max)

        )


    }

    return validateBSTTree(root, -Infinity, Infinity)

};