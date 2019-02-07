interface MyCircularQueue1 {
  length: number;
  list: number[];
  head: number | null;
  tail: number | null;
  Front(): number;
  Rear(): number;
  enQueue(value: number): boolean;
  deQueue(): boolean;
  isEmpty(): boolean;
  isFull(): boolean;
}

class MyCircularQueue implements MyCircularQueue1 {
  length: number;
  list: number[];
  head: number | null;
  tail: number | null;
  constructor(k: number) {
    this.length = k;
    this.list = [];
    this.head = null;
    this.tail = null;
  }
  isFull(): boolean {
    if (this.head === null || this.tail === null) {
      return false;
    }
    if (this.head === this.tail) {
      return true;
    }
    return false;
  }
  isEmpty(): boolean {
    if (this.head === this.tail && this.head === null) {
      return true;
    }
    return false;
  }
  Front(): number {
    if (this.isEmpty()) {
      return -1;
    }
    return this.list[<number>this.head];
  }
  Rear(): number {
    if (this.isEmpty()) {
      return -1;
    }
    return this.list[<number>this.tail - 1 < 0 ? this.length - 1 : <number>this.tail - 1];
  }
  enQueue(value: number): boolean {
    if (this.isFull()) {
      return false;
    }
    if (this.isEmpty()) {
      this.head = this.tail = 0;
    }
    this.list[<number>this.tail] = value;
    this.tail = (1 + (<number>this.tail)) % this.length;
    return true;
  }
  deQueue() {
    if (this.isEmpty()) {
      return false;
    }
    this.head = (1 + (<number>this.head)) % this.length;
    if (this.head === this.tail) {
      this.head = this.tail = null;
      return true;
    }
    return true;
  }
}

export { MyCircularQueue };