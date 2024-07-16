var letterCombinations = function(digits) {

    if(digits === "") return []

    const keyboard = {
        "2": "abc",
        "3": "def",
        "4": "ghi",
        "5": "jkl",
        "6": "mno",
        "7": "pqrs",
        "8": "tuv",
        "9": "wxyz"
    };

    let newArr = []

    // recursive function
    const goback = (currentString, index) =>  {
        // start with the end scenario 
        // we want to check the end of digits = therefore digits.length
        if(index === digits.length ) {
            newArr.push(currentString)
            return;
        }

        // string of letters 
        const letters = keyboard[digits[index]]

        for(let i = 0; i < letters.length; i ++) {
            console.log(letters[i])
            goback(currentString + letters[i], index +1)
        }

    }

    goback('', 0)
    return newArr
};