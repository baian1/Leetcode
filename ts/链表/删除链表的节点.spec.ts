import { ListNode } from "./NodeList";

/**
 * https://leetcode-cn.com/problems/shan-chu-lian-biao-de-jie-dian-lcof/
 * @param head
 * @param val
 */
function deleteNode(head: ListNode | null, val: number): ListNode | null {
  let root = new ListNode(0);
  root.next = head;

  let pre = root;
  let cur = root.next;
  while (cur) {
    if (cur.val !== val) {
      pre = cur;
      cur = cur.next;
    } else {
      pre.next = cur.next;
      cur.next = null;
      break;
    }
  }
  return root.next;
}
it("删除链表的节点", () => {});
