// You are given the head of a singly linked-list. The list can be represented as:

// L0 → L1 → … → Ln - 1 → Ln
// Reorder the list to be on the following form:

// L0 → Ln → L1 → Ln - 1 → L2 → Ln - 2 → …
// You may not modify the values in the list's nodes. Only nodes themselves may be changed.

 

// Example 1:


// Input: head = [1,2,3,4]
// Output: [1,4,2,3]
// Example 2:


// Input: head = [1,2,3,4,5]
// Output: [1,5,2,4,3]

function reorderList(head) {
    let newhead = head
    let newArr = []
    
//     This is to put all the nodes into an array since we are not modifying the actual list's nodes
    while(newhead){
        newArr.push(newhead)
        newhead = newhead.next
    }
    
    for( let i = 0; i < newArr.length; i++){
//         This accounts for L(n) then L(n-1) then L(n-2) because you get last element and subtract by i which will be 0 then 1 then 2
        let r = newArr.length - 1 - i
//      If i (or the left) is greater or equal to the right, stop as we have reached the middle of the list or are at the same index 
        if(i >= r) { newArr[i].next = null; break; }
        console.log("i and r", i, r)
        newArr[i].next = newArr[r]
        console.log(newArr[i].next)
        newArr[r].next = newArr[i + 1]
    }
}


// Solved with using a linkedlist by finding the middle, then reversing the second
// half and combing the sorted list 

var reorderList = function(head) {
    // find middle
	// by moving "fast" twice, we'll have "slow" in the middle
    let slow = head
    let fast = head
    while (fast.next && fast.next.next) {
        slow = slow.next
        fast = fast.next.next
    }

    // reverse second half
	// with reverse linked list solution
    let prev = null
    let cur = slow.next
    while (cur) {
        let temp = cur.next
        cur.next = prev
        prev = cur
        cur = temp
    }

    slow.next = null

    // combine two halves
    let h1 = head
    let h2 = prev

    // if even, second half will be smaller
	while (h2) {
        let temp = h1.next
        console.log(temp)
        h1.next = h2
        console.log("h1.next", h2)
        h1 = h2
        console.log("h1", h1)
        h2 = temp
        console.log("h2", h2)
    }
};