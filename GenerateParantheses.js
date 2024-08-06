// Given n pairs of parentheses, write a function to generate all combinations of well-formed parentheses.

 

// Example 1:

// Input: n = 3
// Output: ["((()))","(()())","(())()","()(())","()()()"]
// Example 2:

// Input: n = 1
// Output: ["()"]

var generateParenthesis = function(n) {
    let result = []
    //we need a recursive function
    function dfs(current, left, right){
//         if the string is double n, then it is complete and push it to the array
        if(current.length == 2 * n) {
            result.push(current);
            return;
        }
        if(left < n) {
            dfs(current.concat("("), left + 1, right);
        }
        if(left > right) {
            dfs(current.concat(")"), left, right + 1);
        }
    }
    dfs("", 0, 0)
    return result
};

var generateParenthesis = function(n) {
    const current = [];
    const gen = (left, right, _string) => {
      if (left === n && right === n) {
        current.push(_string);
        return;
      }
      if (left < n) gen(left + 1, right, _string.concat("("));
      if (left > right && right < n) gen(left, right + 1, _string.concat(")"));
    }
    gen(0, 0, '');
    return current;
  };


  var generateParenthesis = function(n) {
    const result = []

    const backtrack = (string, open, close) => {
        // base case
        if(string.length === n*2) {
            result.push(string)
            return
        }

        // logic to track remaining pairs
        if(open < n) {
            backtrack(string + '(', open +1, close)
        }

        if(close < open) {
            backtrack(string + ')', open, close +1)
        }


    }

    backtrack("", 0, 0)
    return result 

};