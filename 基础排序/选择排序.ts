import { swap } from "./swap";

/**
 * 选择排序
 *
 * 每次从未排序中选出最大元素添加到已排序区域
 */

export function SelectSort(nums: number[]) {
  for (let i: number = 0; i < nums.length; i++) {
    let maxIndex = 0;
    let max = Number.MIN_SAFE_INTEGER;
    for (let j: number = i; j < nums.length; j++) {
      if(nums[j]>max){
        max=nums[j]
        maxIndex=j
      }
    }
    if(maxIndex!==i){
      swap(nums,i,maxIndex)
    }
  }
}
