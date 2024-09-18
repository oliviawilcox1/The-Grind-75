var goodNodes = function(root) {
    // we want to return an integer 

    const traverseAndCountGoodNodes = (root, max) => {
        // starting at the root 
        if(root === null) {
            return 0;
        }

        max = Math.max(root.val, max)
        let count = root.val >= max ? 1: 0
        console.log(count)
        // if not dont add anything 
        let left = traverseAndCountGoodNodes(root.left, max)
        let right = traverseAndCountGoodNodes(root.right, max)
        return count + left + right
    }
    return traverseAndCountGoodNodes(root, root.val)
};