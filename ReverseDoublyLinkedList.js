function reverseDoublyLinkedList(head) {
    let current = head;
    let temp = null;

    // Swap next and prev for each node
    while (current !== null) {
        temp = current.prev;
        current.prev = current.next;
        current.next = temp;
        current = current.prev;
    }

    // Update head to point to the new front of the list
    if (temp !== null) {
        head = temp.prev;
    }

    return head;
}
