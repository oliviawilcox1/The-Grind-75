var levelOrder = function(root) {
    const arr = []

    // every time were on a new level we push a new array 
    // i think we have to keep track of depth again

    function traverse(root, depth) {
        if(root === null) {
            return 
        }

        if(depth === arr.length){
            arr.push([root.val])
        } else if (arr[depth]) {
            arr[depth].push(root.val)
        }
        // or just else {}

        traverse(root.left, depth + 1)
        traverse(root.right, depth + 1)

    }

    traverse(root, 0)
    return arr 
};