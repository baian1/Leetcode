import { MinHeap } from "./最小堆";

class KthLaegest {
  minHeap: MinHeap<number>;
  constructor(k: number, item: number[]) {
    let length=item.length;
    item = item.sort((a, b) => a - b);
    this.minHeap = new MinHeap(-10, k);
    this.minHeap.create(item.slice(-k));
  }
  add(item:number):number {
    if(this.minHeap.Size!==this.minHeap.Cpacity){
      this.minHeap.insert(item);
      return this.minHeap.Elements[1];
    }
    if(item<=this.minHeap.Elements[1]){
      return this.minHeap.Elements[1]
    }else{
      this.minHeap.Elements[1]=item;
      this.minHeap.sort(1);
      return this.minHeap.Elements[1];
    }
  }
}

export {KthLaegest};
