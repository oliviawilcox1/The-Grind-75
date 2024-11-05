function convert(s, numRows) {

    if(numRows === 1) return s

    const rows = Array(numRows).fill('')

    let goingDown = false
    let currentRow = 0
    
    for(let i = 0; i < s.length; i++){

        rows[currentRow] += s[i]

        if(currentRow === 0 || currentRow === numRows -1){
            goingDown = !goingDown
        }
        
        currentRow += goingDown ? 1 : -1
    }

    return rows.join("")
};


var convert = function(s, numRows) {
    let count = 0
    let down = true

    const obj = {}

    for(let i = 0; i < s.length; i++) {
        const letter = s[i]

        if(!obj[count+1]){
            obj[count + 1] = ''
        }

        obj[count + 1] += s[i]

        if(down){
            count++
        } else {
            count--
        }

        if(count === numRows - 1) {
            down = false
        } else if(count === 0){
            down = true
        } 
    }

    let returnStr = ''

    for(let key in obj){
        returnStr += obj[key]
    }

    return returnStr
};