
var buildTree = function(preorder, inorder) {
    // we are given arrays 
    // we want to return one array 


    const construct = (preStart, preEnd, inStart, inEnd)=>{

        // base case
        if(preStart > preEnd || inStart > inEnd){
            return null
        }

        const rootVal = preorder[preStart]
        console.log(rootVal)
        const root = new TreeNode(rootVal)

        const index = inorder.indexOf(rootVal)
        const leftSize = index - inStart


        root.left = construct(preStart+1, preStart + leftSize, inStart, index-1)
        root.right = construct(preStart+leftSize +1, preEnd, index+1, inEnd)
        return root
    }

    return construct(0, preorder.length -1, 0, inorder.length -1)

};