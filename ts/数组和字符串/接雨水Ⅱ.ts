class priorityQueue<T> {
  // 由大到小排列
  list: T[];
  constructor(public campare: (a: T, b: T) => boolean) {
    this.list = [];
  }
  insert(data: T): void {
    if (this.list.length === 0) {
      this.list.push(data);
    }
    for (let i = 0; i < this.list.length; i++) {
      if (this.campare(this.list[i], data)) {
        continue;
      } else {
        this.list = [...this.list.slice(0, i), data, ...this.list.slice(i)];
        return;
      }
    }
    this.list.push(data);
  }
  pop() {
    return this.list.pop();
  }
}

function trapRainWater(heightMap: number[][]): number {
  // [
  //   [1,4,3,1,3,2],
  //   [3,2,1,3,2,4],
  //   [2,3,3,2,3,1]
  // ]
  //[height,x,y]
  type node = [number, number, number];
  //优先队列,从外围最矮的找起
  const pq = new priorityQueue<node>((a, b) => a[0] - b[0] > 0);
  const row = heightMap.length;
  const column = heightMap[0].length;
  //visited
  const visitedMatrix = new Array(row)
    .fill(0)
    .map(() => new Array(column).fill(false));
  for (let i = 0; i < row; i++) {
    for (let j = 0; j < column; j++) {
      if (i === 0 || j === 0 || i === row - 1 || j === column - 1) {
        pq.insert([heightMap[i][j], i, j]);
        visitedMatrix[i][j] = true;
      }
    }
  }
  let sum = 0;
  const directs = [
    [1, 0],
    [0, 1],
    [-1, 0],
    [0, -1],
  ];
  //从外围格子开始往里弹出矮的元素
  //外围的格子如果比周围的格子高
  //灌水给周围的格子到高位
  while (pq.list.length) {
    const node = pq.pop()!;
    for (let direct of directs) {
      const [x, y] = [node[1] + direct[0], node[2] + direct[1]];
      if (x < 0 || y < 0 || x === row || y === column) {
        continue;
      }
      if (visitedMatrix[x][y] === true) {
        continue;
      }
      if (heightMap[x][y] <= node[0]) {
        sum += node[0] - heightMap[x][y];
        heightMap[x][y] = node[0];
        visitedMatrix[x][y] = true;
        pq.insert([node[0], x, y]);
      } else {
        visitedMatrix[x][y] = true;
        pq.insert([heightMap[x][y], x, y]);
      }
    }
  }
  return sum;
}

export { trapRainWater };
