var isValidBST = function(root) {

    function t(node, min,max) {
        if(node === null){ 
            return true
        }

        // console.log(
        //    "Val",
        //     node.val,
        //     "Min",
        //     min,
        //     "Max",
        //     max,
        //     node.val <= min,
        //     node.val >= max
        // )

        if(node.val <= min || node.val >= max){
            console.log("Not true")
            return false
        }

        return t(node.left, min, node.val) && t(node.right , node.val , max)

    }
    return t(root, -Infinity, Infinity )
};