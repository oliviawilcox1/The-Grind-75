// Given the head of a linked list, return the node where the cycle begins. If there is no cycle, return null.

// There is a cycle in a linked list if there is some node in the list that can be reached again by continuously following the next pointer. Internally, pos is used to denote the index of the node that tail's next pointer is connected to (0-indexed). It is -1 if there is no cycle. Note that pos is not passed as a parameter.

// Do not modify the linked list.

// Input: head = [3,2,0,-4], pos = 1
// Output: tail connects to node index 1
// Explanation: There is a cycle in the linked list, where tail connects to the second node.

// Input: head = [1,2], pos = 0
// Output: tail connects to node index 0
// Explanation: There is a cycle in the linked list, where tail connects to the first node.

// Input: head = [1], pos = -1
// Output: no cycle
// Explanation: There is no cycle in the linked list.

// Essentially the node.next is coded on their end to point to another node we have already visited
// so we set a variable to true if we have already visited it
// and then every loop we check if its true meaning we have visited it
//  which means there is a cycle
var hasCycle = function(head) {
    
    let curr = head
    
    while(curr){
        if(curr.visited === true) return curr
        curr.visited = true
        curr = curr.next
    }
    return false
};

var hasCycle = function(head) {
    let slow = head
    let fast = head
    
    while(fast !== null && fast.next !== null) {
        slow = slow.next
        fast = fast.next.next

        if(slow === fast) {
            return true
        }
    }
    return false
};

var hasCycle = function(head) {
    let seen = new Set();
    let curr = head

    while(curr){
        if(seen.has(curr)) return true
        seen.add(curr)
        curr = curr.next
    }
    return false
};