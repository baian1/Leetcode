import { ListNode } from "./NodeList";

export function rotateRight(head: ListNode | null, k: number): ListNode | null {
  if (head === null || k === 0) {
    return head;
  }
  //获取head与end
  //并计数
  let nodeList: ListNode[] = [];
  let current: ListNode | null = head;
  while (current) {
    nodeList.push(current);
    current = current.next;
  }

  const count = nodeList.length;
  const nextHeadIndex = (count - (k % count)) % count;
  if (nextHeadIndex === 0) {
    return head;
  }
  const preNode = nodeList[nextHeadIndex - 1];
  const nextHead = nodeList[nextHeadIndex];
  const end = nodeList[count - 1];
  {
    preNode.next = null;
    end.next = head;
  }
  return nextHead;
}
