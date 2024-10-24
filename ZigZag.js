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