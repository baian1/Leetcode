import { ListNode } from "./NodeList";

/**
 * https://leetcode-cn.com/problems/lian-biao-zhong-dao-shu-di-kge-jie-dian-lcof/
 * @param head
 * @param k
 */
function getKthFromEnd(head: ListNode | null, k: number): ListNode | null {
  let list: ListNode[] = [];
  let cur = head;
  while (cur) {
    list.push(cur);
    cur = cur.next;
  }
  let index = list.length - k;
  return list[index] ?? null;
}

function getKthFromEnd2(head: ListNode | null, k: number): ListNode | null {
  let temp = head;
  for (let i = 0; i < k; i++) {
    if (!head) {
      return null;
    }
    head = head.next;
  }
  while (head && temp) {
    temp = temp.next;
    head = head.next;
  }
  return temp;
}
it("链表中倒数第k个节点", () => {});
