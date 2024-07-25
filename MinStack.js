// Design a stack that supports push, pop, top, and retrieving the minimum element in constant time.

// Implement the MinStack class:

// MinStack() initializes the stack object.
// void push(int val) pushes the element val onto the stack.
// void pop() removes the element on the top of the stack.
// int top() gets the top element of the stack.
// int getMin() retrieves the minimum element in the stack.
// You must implement a solution with O(1) time complexity for each function.

// Input
// ["MinStack","push","push","push","getMin","pop","top","getMin"]
// [[],[-2],[0],[-3],[],[],[],[]]

// Output
// [null,null,null,null,-3,null,0,-2]

// Explanation
// MinStack minStack = new MinStack();
// minStack.push(-2);
// minStack.push(0);
// minStack.push(-3);
// minStack.getMin(); // return -3
// minStack.pop();
// minStack.top();    // return 0
// minStack.getMin(); // return -2



var MinStack = function() {
    this.stack = []
};

/** 
 * @param {number} x
 * @return {void}
 */
MinStack.prototype.push = function(x) {
    let min = this.stack.length === 0 ? x : this.stack[this.stack.length - 1].min
    this.stack.push({val: x, min: Math.min(min, x)})
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function() {
    if(this.stack.length > 0){
        this.stack.pop()
    }
};

/**
 * @return {number}
 */
MinStack.prototype.top = function() {
    if(this.stack.length > 0) {
        return this.stack[this.stack.length - 1].val
    }
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function() {
    if(this.stack.length > 0) {
        return this.stack[this.stack.length - 1].min
    }
};


// Another way

var MinStack = function() {
    this.stack = []
    this.minStack = []
};

/** 
 * @param {number} val
 * @return {void}
 */
MinStack.prototype.push = function(val) {
    this.stack.push(val)
     const lastVal = this.minStack[this.minStack.length-1]
    if(
        this.minStack.length === 0 ||
        val <= this.minStack[this.minStack.length-1]
    ) {
        this.minStack.push(val)
    } 


    // need logic for adding to min stack


};

/**
 * @return {void}
 */
MinStack.prototype.pop = function() {
    // always need to check length 
    if(this.stack.length === 0) {
        return 
    }
    const val = this.stack.pop()
    // check to see if you need to pop min stack too if they are the same value
    if(val === this.minStack[this.minStack.length-1]) {
        this.minStack.pop()
    }
};

/**
 * @return {number}
 */
MinStack.prototype.top = function() {
    if (this.stack.length === 0) {
        return null;
    }
    return this.stack[this.stack.length-1]
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function() {
    if (this.minStack.length === 0) {
        return null;
    }
    return this.minStack[this.minStack.length-1]
};

/** 
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(val)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */