interface HeapStruct<T> {
  Elements: T[];
  Size: number;//堆当前元素个数
  Cpacity: number;//最大容量
}

class MinHeap<T> implements HeapStruct<T> {
  Elements: T[];
  Size: number;//堆当前元素个数
  Cpacity: number;//最大容量
  constructor(minValue: T, Cpacity: number) {
    this.Size = 0;
    this.Cpacity = Cpacity;
    this.Elements = [minValue];
  }

  insert(item: T) {
    if (this.Size === this.Cpacity) {
      throw new RangeError('堆已满');
    }
    let i = ++this.Size;//插入结点起始位置
    for (; this.Elements[Math.floor(i / 2)] > item; i = Math.floor(i / 2)) {
      this.Elements[i] = this.Elements[Math.floor(i / 2)];
    }
    this.Elements[i] = item;
  }

  delete() {
    if (this.Size === 0) {
      throw new RangeError('最小堆已空');
    }
    let MinItem = this.Elements[1];//要删除的结点,根结点最小
    let temp = this.Elements[this.Size];//获取最后一个结点
    this.Elements[1] = temp;
    this.Size--;//删除后根节点减少一个
    let Parent = 1;//从根结点开始整理
    this.sort(Parent);
    this.Elements.pop();//删除最后结点,用下标Size限制
    return MinItem;
  }

  create(item: T[]) {
    if (this.Size > 0) {
      throw new Error('已经初始化了');
    }
    if (item.length > this.Cpacity) {
      throw new RangeError('超出最大范围');
    }
    this.Size += item.length;
    this.Elements = [...this.Elements, ...item];
    let i = Math.floor(this.Size / 2);
    for (i; i > 0; i--) {
      this.sort(i);
    }
  }

  sort(rootIndex: number) {
    let rootValue = this.Elements[rootIndex];
    let Parent = rootIndex;
    let Child;
    for (Parent; Parent * 2 <= this.Size; Parent = Child) {
      Child = Parent * 2;
      if (Child !== this.Size && this.Elements[Child] > this.Elements[Child + 1]) {
        Child++;
      }
      if (rootValue < this.Elements[Child]) {
        break;
      } else {
        this.Elements[Parent] = this.Elements[Child];
      }
    }
    this.Elements[Parent] = rootValue;
  }
}

export { MinHeap };