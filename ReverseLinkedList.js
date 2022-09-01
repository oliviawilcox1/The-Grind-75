// Given the head of a singly linked list, reverse the list, and return the reversed list.
// Input: head = [1,2,3,4,5]
// Output: [5,4,3,2,1]

// Input: head = [1,2]
// Output: [2,1]

// Input: head = []
// Output: []

// FOR GETTING THE LAST NODE IN A LIST 
// var reverseList = function(head) {
//     if(head === null) return head;   
    
//     while( head.next != null){
//         head = head.next
        
//     }
//     return head
// }


var reverseList = function(head) {
    if(head === null) return head;   
    
    let current = head;     
    let prev = null;
    
    while (current) {
        console.log("curren", current)
        let next = current.next
        console.log("current.next", current.next)
        current.next = prev;
        console.log("prev", prev)
        prev = current;
        console.log("prev", prev)
        current = next;        
    }
    
    return prev;
}




// From geeks for geeks
var head;
 
     class Node {
        constructor(val) {
            this.val = val;
            this.next = null;
        }
    }
 
    /* Function to reverse the linked list */
    function reverse(node) {
    var prev = null;
    var current = node;
    var next = null;
        while (current != null) {
            next = current.next;
            current.next = prev;
            prev = current;
            current = next;
        }
        node = prev;
        return node;
    }
 
    // prints content of double linked list
    function printList(node) {
        while (node != null) {
            document.write(node.val + " ");
            node = node.next;
        }
    }
