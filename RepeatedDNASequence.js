var findRepeatedDnaSequences = function(s) {

    if(s.length < 10){
        return []
    }

    const newS = new Set()
    const obj = {}

    for(let i = 0; i <= s.length - 10; i++){
        const substring = s.substring(i, 10 + i)
        const sortedSub = substring.split("").sort((a, b) => a - b).join("")

        if(!obj[sortedSub]){
            obj[sortedSub] = 1
        } else {
            obj[sortedSub]++
            newS.add(substring)
        }
    }

    return [...newS]
};


var findRepeatedDnaSequences = function(s) {

    if(s.length < 10){
        return []
    }

    const seen = new Set();
    const repeated = new Set();

    for (let i = 0; i <= s.length - 10; i++) {
        const substring = s.substring(i, i + 10);
        if (seen.has(substring)) {
            repeated.add(substring);
        } else {
            seen.add(substring);
        }
    }

    return Array.from(repeated);

};