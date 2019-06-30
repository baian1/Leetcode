// class LinkedListNode<T>{
//   prev: LinkedListNode<T> | null;
//   next: LinkedListNode<T> | null;
//   val: T;
//   constructor(val: T) {
//     this.val = val;
//     this.next = null;
//     this.prev = null;
//   }
// }

// interface LinkedListInterface<T> {
//   head: LinkedListNode<T> | null;
//   length: number;
//   getIndex(index: number): T | -1;
//   addAtHead(val: T): void;
//   addAtTail(val: T): void;
//   addAtIndex(index: number, val: T): void;
//   deleteAtIndex(index: number): void;
// }

// class LinkedList<T> implements LinkedListInterface<T>{
//   head: LinkedListNode<T> | null;
//   length: number;
//   constructor() {
//     this.head = null;
//     this.length = 0;
//   }

//   getIndex(index: number) {
//     if (index > this.length - 1) {
//       return -1;
//     }
//     let i = 0;
//     let node = this.head;
//     while (node && i < index) {
//       node = node.next;
//       i++;
//     }
//     return node.val;
//   }

//   addAtHead(val: T) {
//     let node = new LinkedListNode(val);
//     node.next = this.head;
//     if (this.head !== null) {
//       this.head.prev = node;
//     }
//     this.head = node;
//     this.length++;
//   }

//   addAtTail(val: T) {
//     let node = this.head;
//     let Tail = new LinkedListNode(val);

//     if (!node) {
//       this.head = new LinkedListNode(val);
//       this.length++;
//       return;
//     }

//     while (node.next) {
//       node = node.next;
//     }
//     Tail.prev = node;
//     node.next = Tail;
//     this.length++;
//   }

//   addAtIndex(index: number, val: T) {
//     if (index < this.length) {
//       let node = this.head;
//       while (index) {
//         node = node.next;
//         index--;
//       }
//       let prenode = node.prev;
//       let newNode = new LinkedListNode(val);
//       prenode.next = newNode;
//       node.prev = newNode;
//       newNode.prev = prenode;
//       newNode.next = node;
//       this.length++;
//     } else if (index === this.length) {
//       this.addAtTail(val);
//     }
//   }

//   deleteAtIndex(index: number) {
//     if (index >= this.length || index < 0) {
//       return;
//     }

//     if (index === 0) {
//       let node = this.head;
//       this.head = node.next;
//       node.next = null;
//       this.head.prev = null;
//     }

//     let node = this.head;
//     while (index) {
//       index--;
//       node = node.next;
//     }
//     if (node.next === null) {
//       node.prev.next = null;
//       node.prev = null;
//     } else {
//       let pre = node.prev;
//       let next = node.next;
//       pre.next = next;
//       next.prev = pre;
//     }
//     this.length--;
//   }
// }

// export { LinkedList };