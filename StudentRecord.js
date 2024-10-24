var checkRecord = function(s) {
    let absent = 0
    let lateStreak = 0

    for(let i = 0; i < s.length; i++){
        // late checks
        const ele = s[i]
        if(ele === 'L'){
            lateStreak++ 
            if(lateStreak >= 3){
                return false
            }

        } else {
            lateStreak = 0
        }

        // absent checks
        if(ele === 'A'){
            absent++
            if(absent >= 2){
                return false
            }
        }
    }

    return true
};