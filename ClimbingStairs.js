var climbStairs = function(n) {
    
    if (n <3 ){
        return n;
    }
    
let curr = 3, prev = 2, prev2 = 1
  for (let i = 3; i <= n;i++) {
    console.log("iteration " + i )
    curr = prev + prev2;
    console.log("curr", curr)
    prev2 = prev;
    console.log("prev2", prev2)
    prev = curr;
    console.log("prev", prev)
  }
  return curr;
};

console.log(climbStairs(5))

