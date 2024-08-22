var TimeMap = function() {
    this.map = new Map()
};

/** 
 * @param {string} key 
 * @param {string} value 
 * @param {number} timestamp
 * @return {void}
 */
TimeMap.prototype.set = function(key, value, timestamp) {

    if(!this.map.has(key)){
        this.map.set(key, [])
    }

    this.map.get(key).push([timestamp, value])
};

/** 
 * @param {string} key 
 * @param {number} timestamp
 * @return {string}
 */
TimeMap.prototype.get = function(key, timestamp) {

    if(!this.map.has(key)){
        return ""
    }

    const values = this.map.get(key)

    // we have [[1, bar], [4, bar]]

    // we are given a number and we want to return a value pair with a timestamp that is equal to it OR LESS so binary works because we want to find the closest lower half

    let left = 0
    let right = values.length -1

    while(left <= right){
        // calculate middle 
        const mid = Math.floor((left + right) / 2);
        let time = values[mid][0]
        if(time <= timestamp) {
            left = mid + 1
        } else {
            right = mid - 1
        }
    }

    if(right === -1){
        return ""
    }

    return values[right][1]
};

/** 
 * Your TimeMap object will be instantiated and called as such:
 * var obj = new TimeMap()
 * obj.set(key,value,timestamp)
 * var param_2 = obj.get(key,timestamp)
 */