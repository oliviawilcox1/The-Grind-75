var addTwoNumbers = function(l1, l2) {
    let dummyhead = new ListNode(0)
    let currentHead = dummyhead
    let carry = 0

    while(l1 !== null || l2 !== null) {
        let x = l1 !== null ? l1.val : 0
        let y = l2 !== null ? l2.val : 0

        let sum = carry + x + y

        carry = Math.floor(sum/10)
 

        currentHead.next = new ListNode(sum%10)
        currentHead = currentHead.next

        if(l1 !== null) l1 = l1.next
        if(l2 !== null) l2 = l2.next

    }
    if(carry > 0) {
        currentHead.next = new ListNode(carry)
    }
    return dummyhead.next

}