import { MinHeap } from "../ts/堆/最小堆";

/**
 * 利用最小堆排序
 * 1. 从数组创建最小堆
 * 2. 抽出最小根节点直到堆为空
 */

export function heapSort(nums: number[]) {
  let heap = new MinHeap(Number.MAX_SAFE_INTEGER, nums.length);
  heap.create(nums);
  let i = 0;
  while (heap.Size !== 0) {
    nums[i] = heap.delete();
    i++;
  }
}
