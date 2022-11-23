
// Koko loves to eat bananas. There are n piles of bananas, the ith pile has piles[i] bananas. The guards have gone and will come back in h hours.

// Koko can decide her bananas-per-hour eating speed of k. Each hour, she chooses some pile of bananas and eats k bananas from that pile. If the pile has less than k bananas, she eats all of them instead and will not eat any more bananas during this hour.

// Koko likes to eat slowly but still wants to finish eating all the bananas before the guards return.

// Return the minimum integer k such that she can eat all the bananas within h hours.

 

// Example 1:

// Input: piles = [3,6,7,11], h = 8
// Output: 4
// Example 2:

// Input: piles = [30,11,23,4,20], h = 5
// Output: 30
// Example 3:

// Input: piles = [30,11,23,4,20], h = 6
// Output: 23







var minEatingSpeed = function(piles, h) {
    //     Piles is an array with each element having that many bananas. 
    //     H is the amount of hours until guards come back
    //     K will be a minimum number 
        let low = 1;
    //  Pulling the highest value from the array
        let high = Math.max(...piles);
        let ans
    //     While 1 less than 11
        while (low <= high) {
            const mid = low + Math.floor((high - low)/2);
           
            let hours = 0;
            
    //Calculate total time required to finish all bananas with mid as average speed of bananas to eat
            for(let bananas of piles) {
                hours += Math.ceil(bananas/mid)
            }
    //        for example one hours is 6 so it is less than the hours allowed so we need to eat less bananas since we have more time 
            console.log("high",high)
            console.log("low", low)
            console.log("ans", ans)
            console.log(mid)
            console.log("-----")
            if(hours <= h) {
            //If this is the possible ans than lesser value can also be ans so shift end to mid-1
                ans = Math.min(mid, high);
                high = mid - 1;
            }
            else  {
                low = mid + 1;     
            }           
        }
     
        return ans;
    };
    
    