import { ListNode, TreeNode } from "@utils";
import { expect } from "chai";

function detectCycle(head: ListNode | null): ListNode | null {
  let slow = head;
  let fast = head;

  while (fast !== null) {
    slow = slow ? slow.next : null;
    if (fast.next === null) {
      return null;
    }
    fast = fast.next.next;
    if (fast == slow) {
      let ptr = head;
      while (ptr !== slow) {
        ptr = ptr ? ptr.next : null;
        slow = slow ? slow.next : null;
      }
      return ptr;
    }
  }

  return null;
}

describe("环形链表", () => {
  it("1", () => {
    const list = ListNode.newList([3, 2, 0, -4]);
    const end = list.next?.next?.next;
    if (end) {
      end.next = list.next;
    }

    expect(detectCycle(list)?.val).equal(2);
  });
});
