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

/**
 * 使用linkmap实现
 *
 */
class LRUCache2 {
  map: Map<number, number>;
  constructor(public max: number) {
    this.map = new Map();
  }
  get(key: number) {
    let value = this.map.get(key);
    if (!value) {
      return -1;
    }
    this.map.delete(key);
    this.map.set(key, value);
    return value;
  }

  put(key: number, value: number) {
    this.map.delete(key);
    let size = this.map.size;
    if (size >= this.max) {
      let keys = [...this.map.keys()];
      let i = size - this.max; //删去开头多余部分
      for (i; i >= 0; i--) {
        this.map.delete(keys[i]);
      }
    }
    this.map.set(key, value);
  }
}

//构造双向列表的解法
class LRUNode3 {
  pre: null | LRUNode3;
  next: null | LRUNode3;
  constructor(public key: number, public value: number) {
    this.next = null;
    this.pre = null;
  }
}

export class LRUCache3 {
  map: Map<number, LRUNode3>;
  head: LRUNode3;
  end: LRUNode3;
  constructor(public max: number) {
    this.map = new Map();
    this.end = new LRUNode3(-1, 0);
    this.head = new LRUNode3(-1, 0);
    this.head.next = this.end;
    this.end.pre = this.head;
  }
  private moveNodeToHead(node: LRUNode3) {
    //取出这个节点
    const pre = node.pre;
    const next = node.next;
    if (pre !== null && next !== null) {
      pre.next = next;
      next.pre = pre;
    }

    if (this.head.next === null) {
      throw new Error();
    }

    //将节点添加到头部
    node.next = this.head.next;
    this.head.next.pre = node;

    this.head.next = node;
    node.pre = this.head;

    //判断长度,删除不需要的节点
    if (this.map.size > this.max) {
      let needDeleteCount = this.map.size - this.max;
      //寻找到最后一个节点
      let node = this.end.pre;
      while (needDeleteCount && node) {
        this.map.delete(node.key);
        node = node.pre;
        needDeleteCount--;
      }
      if (needDeleteCount !== 0 || node === null) {
        throw new Error();
      }
      node.next = this.end;
      this.end.pre = node;
    }
  }

  get(key: number) {
    let node = this.map.get(key);
    if (node === undefined) {
      return -1;
    }
    this.moveNodeToHead(node);
    return node.value;
  }

  put(key: number, value: number) {
    let node = this.map.get(key);
    if (node === undefined) {
      node = new LRUNode3(key, value);
      this.map.set(key, node);
    } else {
      node.value = value;
    }
    this.moveNodeToHead(node);
  }
}

export { LRUCache2 as LRUCache };
