var wordBreak = function(s, wordDict) {
    console.log(s)
    console.log(wordDict)
    //  because there are multiple permutations and  the word needs to be split into substrings 
    // this will be recursive 
    // we want to sort through substrings and increase the size of a substring 
    // if the word exists slice it and restart the word
    // keep track of the word through the start 
    const dict = new Set(wordDict)
    const memo = {}

    function recurse(start) {
        if(start === s.length) return true // end of word 
        if(start in memo) return memo[start]

        for(let end = start +1; end <= s.length; end++){
            const prefix = s.slice(start, end)


            if(dict.has(prefix) && recurse(end)){
                // update the memo
                memo[start] = true
                return true
            }
        }
        memo[start] = false
        return false
    }

    return recurse(0)
};