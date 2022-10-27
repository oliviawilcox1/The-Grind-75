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