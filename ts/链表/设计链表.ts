class LinkedListNode<T>{
  prev: LinkedListNode<T> | null;
  next: LinkedListNode<T> | null;
  val: T;
  constructor(val: T) {
    this.val = val;
    this.next = null;
    this.prev = null;
  }
}

interface LinkedListInterface<T> {
  head: LinkedListNode<T> | null;
  length: number;
  getIndex(index: number): T | -1;
  addAtHead(val: T): void;
  addAtTail(val: T): void;
  addAtIndex(index: number, val: T): void;
  deleteAtIndex(index: number): void;
}

class LinkedList<T> implements LinkedListInterface<T>{
  head: LinkedListNode<T> | null;
  length: number;
  constructor() {
    this.head = null;
    this.length = 0;
  }
  getIndex(index: number) {
    let i = 0;
    let node = this.head;
    while (node && i < index) {
      node = node.next;
      i++;
    }
    if (i < index || node === null) {
      return -1;
    }
    return node.val;
  }
  addAtHead(val: T) {
    let node = new LinkedListNode(val);
    node.next = this.head;
    if (this.head !== null) {
      this.head.prev = node;
    }
    this.head = node;
  }
  addAtTail(val: T) {
    let node = this.head;
    let Tail = new LinkedListNode(val);
    if (!node) {
      this.head = new LinkedListNode(val);
      return;
    }
    while (node.next) {
      node = node.next;
    }
    Tail.prev = node;
    node.next = Tail;
  }
  addAtIndex(index: number, val: T) {
    if (this.head === null) {
      if (index === 0) {
        this.head = new LinkedListNode(val);
        return;
      }
    }
    let i = 0;
    let node = this.head;
    while (node && i < index - 1) {
      node = node.next;
      i++;
    }
    if (node === null) {
      return;
    } else {
      let nextNode = node.next;
      let newNode = new LinkedListNode(val);
      if (nextNode === null) {
        newNode.prev = node;
        node.next = newNode;
      } else {
        nextNode.prev = newNode;
        newNode.next = nextNode;

        newNode.prev = node;
        node.next = newNode;
      }
    }
  }
  deleteAtIndex(index: number) {
    let i = 0;
    let node = this.head;
    while (node && i < index) {
      node = node.next;
      i++;
    }
    if (node) {
      if (i === 0) {
        if (node.next === null) {
          this.head = null;
        } else {
          this.head = node.next;
          node.next.prev = null;
          node.next = null;
        }
      } else {
        if (node.next === null) {
          (node.prev as LinkedListNode<T>).next = null;
          node.prev = null;
        } else {
          (node.prev as LinkedListNode<T>).next = node.next;
          node.next.prev = node.prev;
          node.next = null;
          node.prev = null;
        }
      }
    }
  }
}

export { LinkedList };