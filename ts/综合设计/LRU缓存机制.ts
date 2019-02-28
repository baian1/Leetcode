class LRUNode {
  next: null | LRUNode;
  constructor(public key: number, public value: number) {
    this.next = null;
  }
}

/**
 * 链表实现
 */
interface LRUCacheInterface {
  head: LRUNode | null;
  preEnd: LRUNode | null;
  findNode(key: number): [LRUNode, LRUNode] | null;
  put(key: number, value: number): void;
  get(key: number): number;
}
class LRUCache implements LRUCacheInterface {
  head: LRUNode | null;
  preEnd: LRUNode | null;
  max: number;
  length: number;
  constructor(max: number) {
    this.max = max;
    this.length = 0;
    this.head = null;
    this.preEnd = null;
  }

  findNode(key: number) {
    let node: LRUNode | null = this.head;
    let prenode = this.head;
    while (node) {
      if (node.key !== key) {
        if (node.next === null && this.length === this.max) {
          this.preEnd = prenode;
        }
        prenode = node;
        node = node.next;
        continue;
      }
      break;
    }
    if (node !== null) {
      let res: [LRUNode, LRUNode] = [<LRUNode>prenode, node];
      return res;
    } else {
      return null;
    }
  }

  get(key: number): number {
    const res = this.findNode(key);
    if (res === null) {
      return -1;
    } else {
      let [prenode, node] = [...res];
      if (prenode === node) {
        return node.value;
      }
      prenode.next = node.next;
      node.next = this.head;
      this.head = node;
      return node.value;
    }
  }

  put(key: number, value: number) {
    const res = this.findNode(key);
    if (res === null) {
      let node = new LRUNode(key, value);
      node.next = this.head;
      this.head = node;
      if (this.length === this.max && this.length !== 1) {
        (<LRUNode>this.preEnd).next = null;
        this.length--;
      } else if (this.length === this.max && this.length === 1) {
        this.head.next = null;
        this.length--;
      }
      this.length++;
    } else {
      let [prenode, node] = [...res];
      if (node === this.head) {
        node.value = value;
        return;
      }
      let newnode = new LRUNode(key, value);
      prenode.next = node.next;
      newnode.next = this.head;
      this.head = newnode;
    }
  }
}

export { LRUCache };