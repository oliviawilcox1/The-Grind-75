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

 //Another Way to solve it 
 var removeNthFromEnd = function(head, n) {
    let root = head;
    let clone = head;
    let len = 0;
   

    while (clone) {
      len++;
      clone = clone.next;
    }

    
    let count = len - n;
    if (count === 0) return head.next;
    while (root && count > 1) {
      root = root.next;
      count--;
    }
  

    root.next = root.next && root.next.next;
    return head;
  };

  //solved using recursion
  var removeNthFromEnd = function(head, n) {
    const help = (root, count) => {
        
      if (root.next) count = help(root.next, count);
      
      if (count === n) root.next = root.next.next;
        console.log(count, root)
      return ++count;
       
    }
    const count = help(head, 0);
    return count === n ? head.next : head;
  };


  var removeNthFromEnd = function(head, n) {
    let dummy = new ListNode(0);
    dummy.next = head;

    let slow = dummy
    let fast = dummy
    

    for(let i = 0; i <=n; i++){
        fast = fast.next
    }

    while(fast !== null){
        slow = slow.next
        fast = fast.next
    }
    console.log(slow, fast)

    slow.next = slow.next.next
    return dummy.next
};