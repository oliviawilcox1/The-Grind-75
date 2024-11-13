var isEvenOddTree = function(root) {
    const arr=[]

    function r(root, level){
        if(root === null){
            return true
        }
        // console.log(root.val)
        // console.log(level)
        const val = root.val
        // even level - odd vals
        // odd vals are in increasing order
        if(level % 2 === 0) {
            // console.log(arr[level], val)
            if(val % 2 === 0 || (arr[level] !== undefined && arr[level] >= val)){
                return false
            }
        } else {
            if(val % 2 !== 0 || (arr[level] !== undefined && arr[level] <= val)){
                return false
            }
        } 

        arr[level] = val
        return r(root.left, level + 1) && r(root.right, level + 1)
    }

    return r(root, 0)
};