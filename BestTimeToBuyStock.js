// You are given an array prices where prices[i] is the price of a given stock on the ith day.

// You want to maximize your profit by choosing a single day to buy one stock and choosing a different day in the future to sell that stock.

// Return the maximum profit you can achieve from this transaction. If you cannot achieve any profit, return 0.

// Example 1:

// Input: prices = [7,1,5,3,6,4]
// Output: 5
// Explanation: Buy on day 2 (price = 1) and sell on day 5 (price = 6), profit = 6-1 = 5.
// Note that buying on day 2 and selling on day 1 is not allowed because you must buy before you sell.


var maxProfit = function(prices) {
    let lowest = prices[0];
  console.log(lowest)
    let maxProfit = 0;
  
    for (let i = 1; i < prices.length; i++) {
        if (prices[i] <= prices[i - 1]) {
            // Stock down
          console.log(lowest)
          console.log(prices[i], i)
            lowest = Math.min(lowest, prices[i]);
            console.log(lowest)
        } else {
            // Stock up
            maxProfit = Math.max(maxProfit, prices[i] - lowest);
        }
    }
    
    return maxProfit;
};

console.log(maxProfit([1,3,2,7]))

// Even More Succinct

var maxProfit = function(prices) {
  let result = 0;
  let min = prices[0];
  for(let i = 1; i < prices.length; i++) {
      min = Math.min(prices[i], min);
      result = Math.max(result, prices[i] - min);
  }
  return result;
};

var maxProfit = function(prices) {
  let min = prices[0]
  let max = 0
  let buyday = 0
  let sellday = 0

  for(let i = 1; i < prices.length; i++) {
      // check if its greater 
      if(prices[i] < min) {
          min = prices[i]
          buyday = i
      } else if (prices[i] - min > max) {
          max = prices[i] - min;
          sellday = i;
      }
  }
  return max
  
};