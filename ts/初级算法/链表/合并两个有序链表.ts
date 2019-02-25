/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
class ListNode {
  constructor(public val: number, public next: ListNode | null = null) {

  }
}
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 * 递归
 */
var mergeTwoLists = function (l1: ListNode | null, l2: ListNode | null) {
  if (l1 === null) {
    return l2;
  }
  if (l2 === null) {
    return l1;
  }
  let head;
  if (l1.val > l2.val) {
    head = l2;
    head.next = mergeTwoLists(l1, l2.next);
  } else {
    head = l1;
    head.next = mergeTwoLists(l1.next, l2);
  }
  return head;
};

var mergeTwoLists2 = function (l1: ListNode | null, l2: ListNode | null) {
  if (l1 === null) {
    return l2;
  }
  if (l2 === null) {
    return l1;
  }
  let head = new ListNode(0);
  let cur = head;
  while (l1 && l2) {
    if (l1.val > l2.val) {
      cur.next = l2;
      l2 = l2.next;
      cur = cur.next;
      cur.next = null;
    } else {
      cur.next = l1;
      l1 = l1.next;
      cur = cur.next;
      cur.next = null;
    }
  }
  const wei = l1 === null ? l2 : l1;
  cur.next = wei;
  return head;
};