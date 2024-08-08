function findMedianSortedArrays(smallerArray, largerArray) {
    // Ensure smallerArray is the smaller of the two arrays
    if (smallerArray.length > largerArray.length) {
        [smallerArray, largerArray] = [largerArray, smallerArray];
    }

    const m = smallerArray.length;
    const n = largerArray.length;
    let leftMin = 0;
    let leftMax = m;
    const halfLen = Math.floor((m + n + 1) / 2);

    while (leftMin <= leftMax) {
        const partitionSmaller = Math.floor((leftMin + leftMax) / 2);
        const partitionLarger = halfLen - partitionSmaller;

        // Edge values of the partitions
        const maxLeftSmaller = partitionSmaller === 0 ? -Infinity : smallerArray[partitionSmaller - 1];
        const minRightSmaller = partitionSmaller === m ? Infinity : smallerArray[partitionSmaller];
        const maxLeftLarger = partitionLarger === 0 ? -Infinity : largerArray[partitionLarger - 1];
        const minRightLarger = partitionLarger === n ? Infinity : largerArray[partitionLarger];

        // Adjust partitions
        if (maxLeftSmaller > minRightLarger) {
            leftMax = partitionSmaller - 1;
        } else if (maxLeftLarger > minRightSmaller) {
            leftMin = partitionSmaller + 1;
        } else {
            // Found the correct partition
            if ((m + n) % 2 === 1) {
                return Math.max(maxLeftSmaller, maxLeftLarger);
            } else {
                return (Math.max(maxLeftSmaller, maxLeftLarger) + Math.min(minRightSmaller, minRightLarger)) / 2.0;
            }
        }
    }

    throw new Error("Input arrays are not sorted correctly or cannot be partitioned.");
}
