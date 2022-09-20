// Given the head of a singly linked list, return the middle node of the linked list.

// If there are two middle nodes, return the second middle node.

// Input: head = [1,2,3,4,5]
// Output: [3,4,5]
// Explanation: The middle node of the list is node 3.

// Input: head = [1,2,3,4,5,6]
// Output: [4,5,6]
// Explanation: Since the list has two middle nodes with values 3 and 4, we return the second one.

// Did Myself!!
var middleNode = function(head) {
    
    if(head === null) return head;   
    
    let node = head
    let length = 1
    
    while( node.next != null){
        length++
        node = node.next
    }
    
    let count = 1
    let middle = parseInt(length/2)
    
    while(count <= middle ){
        head = head.next
        count ++
    }
    return head
};

// Another Way
var middleNode = function(head) {
    let slow = head, fast = head
    while(fast !== null && fast.next !== null){
        console.log("slow", slow)
        slow = slow.next
        console.log("slow", slow)
        fast = fast.next.next
        console.log("fast", fast)
        
    }
    return slow
};


// Another Way
var middleNode = function(head) {
    let count = 1
    let hi = head
    if(head.next === null) return head
    
    while(hi.next){
        hi = hi.next
        count++
    }
  
    let middle = parseInt(count / 2);
  
    let counter = 1
    while(counter < middle){
        head = head.next
        counter++
      
    }  
      return  head.next
  };
  
  