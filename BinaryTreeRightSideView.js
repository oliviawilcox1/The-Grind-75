var rightSideView = function(root) {
    const vals = []

    function traverse(root, depth) {
        // console.log(root)
        if(root === null) { return }
        
        // console.log(depth)
        if(depth === vals.length) {
            // console.log(root.right)
            vals.push(root.val)
        }


       traverse(root.right, depth + 1)
       
       traverse(root.left, depth + 1)

    }

    traverse(root, 0)
    return vals
};