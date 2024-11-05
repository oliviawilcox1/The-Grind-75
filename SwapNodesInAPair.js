var swapPairs = function(head) {
    if( !head || !head.next) return head
    let dummy = { next: head}
    let prev = dummy
    let curr = head


    while (curr && curr.next) {
        let firstNode = curr
        let secondNode = curr.next
   
        // swap nodes
        prev.next = secondNode
        firstNode.next = secondNode.next
        secondNode.next = firstNode

        // swap pointers
        prev = firstNode 
        curr = firstNode.next

    }

    return dummy.next

};