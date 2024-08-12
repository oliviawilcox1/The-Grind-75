// You are given the heads of two sorted linked lists list1 and list2.

// Merge the two lists in a one sorted list. The list should be made by splicing together the nodes of the first two lists.

// Return the head of the merged linked list.
// Input: list1 = [1,2,4], list2 = [1,3,4]
// Output: [1,1,2,3,4,4]
// Example 2:

// Input: list1 = [], list2 = []
// Output: []
// Example 3:

// Input: list1 = [], list2 = [0]
// Output: [0]


var mergeTwoLists = function(list1, list2) {
    let merge = new ListNode()
    let head = merge
    
    while(list1 && list2){
      if(list1.val< list2.val) {
        merge.next = list1
        list1 = list1.next
    } else {
        
        merge.next = list2
        list2 = list2.next
    }
    merge = merge.next
   
} 
    if(!list1) merge.next = list2
    else if (!list2) merge.next = list1
    
    return head.next

};

var mergeTwoLists = function(list1, list2) {
    
    let dummy = new ListNode(-1)
    let current = dummy

    while(list1 !== null && list2 !== null){
        if(list1.val <= list2.val){
            current.next = list1
            list1 = list1.next
        } else {
            current.next = list2
            list2 = list2.next
        }
        current = current.next
    }

    // check list lengths 
    current.next = list1 === null ? list2 : list1 
    return dummy.next
};