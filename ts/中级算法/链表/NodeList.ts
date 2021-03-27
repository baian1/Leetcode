class ListNode {
  val: number;
  next: ListNode | null;
  constructor(value: number) {
    this.val = value;
    this.next = null;
  }

  toArray() {
    const list: number[] = [];
    let current: ListNode | null = this;
    while (current) {
      list.push(current.val);
      current = current.next;
    }
    return list;
  }
}

const initList = function (nums: number[]) {
  let node = new ListNode(nums[0]);
  let head = node;
  for (let i = 1; i < nums.length; i++) {
    node.next = new ListNode(nums[i]);
    node = node.next;
  }
  return head;
};

export { ListNode, initList };
