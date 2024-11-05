var getIntersectionNode = function(headA, headB) {

    if(!headA|| !headB) return null
    let head1 = headA
    let head2 = headB


    while(head1 !== head2){
        head1 = head1? head1.next : headB
        head2 = head2 ? head2.next : headA
    }

    return head1
};