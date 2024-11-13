var findLengthOfShortestSubarray = function(arr) {
    let left = 0
    let right = arr.length - 1 

    while(left < arr.length && arr[left] <= arr[left+1]){
        left++
    }

    if (left === arr.length -1){
        return 0
    }


    while(right > left && arr[right] >= arr[right - 1] ){
        right--
    }

    // console.log(arr[left], arr[right])

    let min = Math.min(arr.length - 1 - left, right)
    console.log(min)

    // study
    let i = 0;
    let j = right;
    while (i <= left && j < arr.length) {
        console.log(arr[i], arr[j])
        if (arr[i] <= arr[j]) {
            console.log(min)
            min = Math.min(min, j - i - 1);
            console.log(min)
            i++;
        } else {
            j++;
        }
    }

    return min;
};