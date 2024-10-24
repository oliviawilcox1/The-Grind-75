var firstUniqChar = function(s) {
    const obj = new Map()

    for(let i = 0; i < s.length; i++){
        if(obj.has(s[i])){
            obj.set(s[i], obj.get(s[i]) + 1)
        } else {
            obj.set(s[i], 1)
        }
    }
    
    for(let i = 0; i < s.length; i++){
        if( obj.get(s[i]) === 1){
            return i
        } 
    }
    return -1

};