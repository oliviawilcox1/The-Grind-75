function findMaxLengthOfCommonSubarray(array1, array2) {
    let maxLength = 0;
    const dpTable = Array(array1.length + 1).fill(0).map(() => Array(array2.length + 1).fill(0));

    for (let i = 1; i <= array1.length; i++) {
        for (let j = 1; j <= array2.length; j++) {
            if (array1[i - 1] === array2[j - 1]) {
                dpTable[i][j] = dpTable[i - 1][j - 1] + 1;
                maxLength = Math.max(maxLength, dpTable[i][j]);
            }
        }
    }

    return maxLength;
}
