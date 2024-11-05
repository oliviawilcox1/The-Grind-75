var minChanges = function(s) {
    let minNumber = 0


    for(let i = 1; i < s.length; i += 2) {
        // we know since its even it can always be chunked into two 
        const substring = s.substring(i-1, i+1)
  
        const letters = substring.split("")

        if(letters[0] !== letters[1]){
            minNumber++
        }
    }

    return minNumber
};