// The Fibonacci numbers, commonly denoted F(n) form a sequence, called the Fibonacci sequence, such that each number is the sum of the two preceding ones, starting from 0 and 1. That is,

// F(0) = 0, F(1) = 1
// F(n) = F(n - 1) + F(n - 2), for n > 1.
// Given n, calculate F(n).

// Example 1:

// Input: n = 2
// Output: 1
// Explanation: F(2) = F(1) + F(0) = 1 + 0 = 1.
// Example 2:

// Input: n = 3
// Output: 2
// Explanation: F(3) = F(2) + F(1) = 1 + 1 = 2.
// Example 3:

// Input: n = 4
// Output: 3
// Explanation: F(4) = F(3) + F(2) = 2 + 1 = 3.


//  With an Array 
var fib = function(n) {

    if(n == 0) return 0;
    if(n == 1) return 1;
    let sum = [0,1]
    for( let i = 2; i< n; i++){
        sum[i] = sum[i-1] + sum[i-2]
        
    }
    return sum[n-1] + sum[n-2]
};

// With reassignment 
var fib = function(n) {

    if(n == 0) return 0;
    if(n == 1) return 1;
   
    let i = 2
    let a = 0
    let b = 1
    while ( i <= n){
        let temp = a+b
        a = b
        b = temp 
        i++
    }
    return b;
    
};
    
// With a Hash Table
var fib = function(N) {
    const map = {
        0:0,
        1:1,
        2:1
    }
    for (let i=3;i<=N;i++) {
        map[i] = map[i-1] + map[i-2]
    }
    return map[N]
}
    

