// You are given an integer array coins representing coins of different denominations and an integer amount representing a total amount of money.

// Return the fewest number of coins that you need to make up that amount. If that amount of money cannot be made up by any combination of the coins, return -1.

// You may assume that you have an infinite number of each kind of coin.

 

// Example 1:

// Input: coins = [1,2,5], amount = 11
// Output: 3
// Explanation: 11 = 5 + 5 + 1
// Example 2:

// Input: coins = [2], amount = 3
// Output: -1
// Example 3:

// Input: coins = [1], amount = 0
// Output: 0

// STUDY THIS PROBLEM

var coinChange = function(coins, amount) {
    
    const newArray = Array(amount).fill(Infinity);
    newArray[0] = 0;
    
    for (let i = 1; i <= amount; i++) {     
        newArray[i] = Math.min(...coins.map(coin => i - coin >= 0 ? newArray[i - coin] + 1 : Infinity));
        console.log(...coins.map(coin => i - coin ))
    }
    
    
    return newArray[amount] === Infinity ? -1 : newArray[amount];
};


var coinChange = function(coins, amount) {
    let minCoins = new Array(amount + 1).fill(Infinity);
    minCoins[0] = 0;
    
    for(let i = 0; i < coins.length; i++){
        for(let j =  0; j < minCoins.length; j++){

            if(coins[i] <= j){
        
                minCoins[j] = Math.min(minCoins[j], 1 + minCoins[j-coins[i]]);
            }
        }
    };
    return minCoins[amount]!= Infinity ? minCoins[amount] : -1; 
};