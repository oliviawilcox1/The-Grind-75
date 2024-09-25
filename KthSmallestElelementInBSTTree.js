var kthSmallest = function(root, k) {
    // clarify - so we want to return the k smallest value 
    // let kNode = null
    // // so for brute force
    // // we can traverse through the whole tree and sort the values in an array 
    // // then we can just reutrn the corresponding index 
    // // more efficient would be traverse and returning the k number


    const nodes = []

    const traverse = (root) => {
        if(root === null) {
            return 
        }

        traverse(root.left)

        nodes.push(root.val)

        traverse(root.right)

    }

    traverse(root)
    console.log(nodes)

    // sort in case 
    nodes.sort((a,b)=> a - b)

    console.log(nodes)

    return nodes[k-1]
};