/**
 * 优化:
 * 1.使用-1表示指针为空
 * 2.使用tail表示最后一个元素
 * 3.一轮循环规则修改
 */

interface MyCircularQueue1 {
  length: number;
  list: number[];
  head: number;
  tail: number;
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
  head: number;
  tail: number;
  constructor(k: number) {
    this.length = k;
    this.list = [];
    this.head = -1;
    this.tail = -1;
  }

  isFull(): boolean {
    if((this.tail+1)%this.length===this.head){
      return true;
    }
    return false;
  }//尾指针的下一个指针是头指针时,队列满

  isEmpty(): boolean {
    if (this.head === -1) {
      return true;
    }
    return false;
  }//头指针不存在时,队列空

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
    return this.list[this.tail];
  }

  enQueue(value: number): boolean {
    if (this.isFull()) {
      return false;
    }
    if (this.isEmpty()) {
      this.head = 0;
    }
    this.tail = (1 + this.tail) % this.length;
    this.list[this.tail] = value;
    return true;
  }

  deQueue() {
    if (this.isEmpty()) {
      return false;
    }
    if(this.tail===this.head){
      this.tail=-1;
      this.head=-1;
      return true;
    }
    this.head = (1 + this.head) % this.length;
    return true;
  }
}

export { MyCircularQueue };