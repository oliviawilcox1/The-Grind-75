// Valid Parantheses

// Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

// An input string is valid if:

// Open brackets must be closed by the same type of brackets.
// Open brackets must be closed in the correct order.
// Example 1:

// Input: s = "()"
// Output: true
// Example 2:

// Input: s = "()[]{}"
// Output: true
// Example 3:

// Input: s = "(]"
// Output: false


// Constraints:

// 1 <= s.length <= 104
// s consists of parentheses only '()[]{}'.

var isValid = function(s) {
    console.log(s)
    
    let storage = [];
    if(s.length === 0 ) {
      return false;
    }
    for(let i =0; i <s.length; i++){
      if(s[i]=== "(" || s[i]=== "{" || s[i] === "["){
        storage.push(s[i])
      } else if (s.length > 0) {
          if (s[i]=== ")" && storage[storage.length-1] === "(") {
            console.log(storage)
            storage.pop()
          } else if (s[i]=== "}" && storage[storage.length-1] === "{") {
            storage.pop()
          } else if (s[i]=== "]" && storage[storage.length-1] === "[") {
            storage.pop()
          } else {
            return false;
          }
        } else {
        return false
        }
      if(storage.length > 0) return false;
      return true;
    }
  };
  
  console.log(isValid("(]"))


// Second Option
var isValid = function(s) {
    const stack = [];
    
    for (let i = 0; i < s.length; i += 1) {
        const prev = stack[stack.length - 1];
        const curr = s[i];
        
        if (prev && 
            (prev === '(' && curr === ')') ||
            (prev === '{' && curr === '}') ||
            (prev === '[' && curr === ']')) {
            stack.pop();
            continue;
        }
        
        stack.push(curr);
    }
    
    return stack.length === 0;
};