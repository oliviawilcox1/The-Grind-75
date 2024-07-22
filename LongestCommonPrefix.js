var longestCommonPrefix = function(strs) {
    
    let prefix = strs[0]
    //compare to the first prefix, 

    // iterate over strings array
    for(let i = 0; i < strs.length; i ++){
        let index = 0
        // so strs[i] is one word
        // what conditions are we checking
        while(index < prefix.length && index < strs[i].length) {
            // check if they are the same 
            if(prefix[index] !== strs[i][index]){
                break;
            }
            index++
        }

        prefix = prefix.substring(0, index)
    }


    return prefix 
};