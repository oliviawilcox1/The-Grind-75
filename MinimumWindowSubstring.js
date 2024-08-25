// NOT OPTIMABLE
var minWindow = function(s, t) {
    // we know it cant be less than t
    // we also want to return the minimum string from s so the smallest it can be but greater than t 
    if(s.length < t.length) return ""

    const tCharsMap = {}
    for(let i = 0; i < t.length; i++){
        tCharsMap[t[i]] = (tCharsMap[t[i]] || 0) + 1
    }

    let result = ""
    let left = 0
    let min = 0
    const sCharsMap = {}

    for(let right = 0; right < s.length; right++){
        sCharsMap[s[right]] = (sCharsMap[s[right]] || 0) + 1
        // console.log(sCharsMap)
        console.log(left, right)
        // console.log("We have reached t.length")
        // start doing our logic to check 
        // check if all characters from tmap are in smap
        while(helperFunction(tCharsMap, sCharsMap)) {
            let currentWindow = s.slice(left, right + 1);

            if (!result || currentWindow.length < result.length) {
                result = currentWindow
            }

            sCharsMap[s[left]]--
            if(sCharsMap[s[left]]=== 0) delete sCharsMap[s[left]]
            left++
        }
    }

    function helperFunction(tMap, sMap){
        
        for (let key in tMap) {
            if(!(key in sMap) || sMap[key] < tMap[key]) {
                return false
            }
        }
        return true;
    }

    return result
};

// CORRECT WAY
var minWindow = function(s, t) {
    // we know it cant be less than t
    // we also want to return the minimum string from s so the smallest it can be but greater than t 
    if(s.length < t.length) return ""

    const tCharsMap = {}
    for(let i = 0; i < t.length; i++){
        tCharsMap[t[i]] = (tCharsMap[t[i]] || 0) + 1
    }
    
    const sCharsMap = {};
    let left = 0, right = 0;
    let requiredLength = Object.keys(tCharsMap).length;
    let formed = 0;
    let minLen = Infinity, minLeft = 0;

    while (right < s.length) {
        let char = s[right];
        sCharsMap[char] = (sCharsMap[char] || 0) + 1;

        if (tCharsMap[char] && sCharsMap[char] === tCharsMap[char]) {
            //logging if word has formed
            formed++;
        }

        while (left <= right && formed === requiredLength) {
            char = s[left];

            if (right - left + 1 < minLen) {
                minLen = right - left + 1;
                minLeft = left;
            }

            sCharsMap[char]--;
            if (tCharsMap[char] && sCharsMap[char] < tCharsMap[char]) {
                formed--;
            }

            left++;
        }

        right++;
    }

    return minLen === Infinity ? "" : s.substring(minLeft, minLeft + minLen);
};