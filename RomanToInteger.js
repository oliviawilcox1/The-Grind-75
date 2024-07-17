var romanToInt = function(s) {
    
    // first we have the dictionary 

    // we iterate over the string and lookup its value in the dictionary 
    // caveat is keeping track of if the upcoming index is bigger than the current then we will need to subtract 
    const roman_numbers = {
        'I' : 1,
        'V' :  5,
        'X' : 10,
        'L'           : 50,
        'C'           : 100,
        'D'            :500,
        'M'            : 1000,
    }

    let sum = 0

    for(let i =0; i < s.length; i ++ ) {
        // we want to look up our value 
         const currentValue = roman_numbers[s[i]];
        const nextValue = roman_numbers[s[i + 1]];

        // If the next value exists and is greater than the current value, subtract the current value
        if (nextValue > currentValue) {
            sum -= currentValue;
        } else {
            sum += currentValue;
        }

    }

    return sum
};