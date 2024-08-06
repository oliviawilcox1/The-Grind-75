// Evaluate the value of an arithmetic expression in Reverse Polish Notation.

// Valid operators are +, -, *, and /. Each operand may be an integer or another expression.

// Note that division between two integers should truncate toward zero.

// It is guaranteed that the given RPN expression is always valid. That means the expression would always evaluate to a result, and there will not be any division by zero operation.

 

// Example 1:

// Input: tokens = ["2","1","+","3","*"]
// Output: 9
// Explanation: ((2 + 1) * 3) = 9
// Example 2:

// Input: tokens = ["4","13","5","/","+"]
// Output: 6
// Explanation: (4 + (13 / 5)) = 6
// Example 3:

// Input: tokens = ["10","6","9","3","+","-11","*","/","*","17","+","5","+"]
// Output: 22
// Explanation: ((10 * (6 / ((9 + 3) * -11))) + 17) + 5
// = ((10 * (6 / (12 * -11))) + 17) + 5
// = ((10 * (6 / -132)) + 17) + 5
// = ((10 * 0) + 17) + 5
// = (0 + 17) + 5
// = 17 + 5
// = 22

function evalRPN(tokens) {
    const stack = [];
    
      for(let i=0; i< tokens.length; i++){
          let token = tokens[i]
          if(token === "+"){
              stack.push(stack.pop()+stack.pop())
          } else if (token === "-") {
              stack.push(-stack.pop()+stack.pop())
          } else if (token === "*") {
              stack.push(stack.pop()*stack.pop())
          } else if (token === "/") {
               stack.push(Math.trunc(1/stack.pop()*stack.pop()))
          } else{
              stack.push(parseInt(token))
          }
      }
    return stack[0];
  }

  var evalRPN = function(tokens) {
    // my guess is its a stack and whenever you hit a evalution you pop things off the stack 
    const stack = []

    for(let i=0; i< tokens.length; i++) {
        if(
            tokens[i] === "+" ||
            tokens[i] === "*" ||
            tokens[i] === "-" ||
             tokens[i] === "/"
        ) {
            const token = tokens[i]
            const number2 = stack.pop()
            const number1 = stack.pop()
            let result;

            switch(token){
                case "+":
                    result = number1 + number2
                    break;
                case "-":
                    result = number1 - number2
                    break;
                case "*":
                    result = number1 * number2
                    break;
                case "/":
                    result = Math.trunc(number1/number2)
                    break;
            }
            stack.push(result)

        } else {
            stack.push(Number(tokens[i]))
        }
    }
    return stack[0]
};