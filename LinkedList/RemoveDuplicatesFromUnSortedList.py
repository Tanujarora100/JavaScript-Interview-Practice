# https://leetcode.com/problems/remove-duplicates-from-an-unsorted-linked-list/
# Time O(N) | Space O(N)
class ListNode:
    def _init_(self, val):
        self.val = val
        self.next = None
def remove_duplicates(head: ListNode) -> ListNode:
    if head is None:
        return head

    visited_values = set()
    current = head
    new_head = ListNode(-1)
    new_tail = new_head

    while current:
        if current.val in visited_values:
            current = current.next
        else:
            visited_values.add(current.val)
            new_tail.next = ListNode(current.val)
            new_tail = new_tail.next
            next_node = current.next
            current.next = None  
            current = next_node

    return new_head.next




