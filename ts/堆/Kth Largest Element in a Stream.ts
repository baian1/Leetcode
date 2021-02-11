import { MinHeap } from "./最小堆";

class KthLargest {
  minHeap: MinHeap<number>;
  constructor(k: number, item: number[]) {
    item = item.sort((a, b) => a - b);
    this.minHeap = new MinHeap(Number.NEGATIVE_INFINITY, k);
    this.minHeap.create(item.slice(-k));
  }
  add(item: number): number {
    if (this.minHeap.Size !== this.minHeap.Cpacity) {
      this.minHeap.insert(item);
      return this.minHeap.Elements[1];
    }
    if (item <= this.minHeap.Elements[1]) {
      return this.minHeap.Elements[1];
    } else {
      this.minHeap.Elements[1] = item;
      this.minHeap.sort(1);
      return this.minHeap.Elements[1];
    }
  }
}

export { KthLargest };
