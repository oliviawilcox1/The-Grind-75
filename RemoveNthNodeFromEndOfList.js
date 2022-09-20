// Given the head of a linked list, remove the nth node from the end of the list and return its head.

 

// Example 1:


// Input: head = [1,2,3,4,5], n = 2
// Output: [1,2,3,5]
// Example 2:

// Input: head = [1], n = 1
// Output: []
// Example 3:

// Input: head = [1,2], n = 1
// Output: [1]

var removeNthFromEnd = function(head, n) {
    let counter = 1
    let headNode = head
    let newArr = []
     
     while (headNode.next !== null) {
        newArr.push(headNode.val)
        headNode = headNode.next
        counter++  
     }
     newArr.push(headNode.val)
     let newCounter = counter - n 
     newArr.splice(newCounter, 1)
     
     const arrToList = (arr) => arr.reduceRight((last, val)=> last = last === null ? new ListNode(val) : new ListNode(val, last),null)
 
     return arrToList(newArr)
 
 };