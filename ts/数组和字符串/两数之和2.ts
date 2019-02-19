/**
 * 给定一个已按照升序排列 的有序数组，找到两个数使得它们相加之和等于目标数。
 * 函数应该返回这两个下标值 index1 和 index2，其中 index1 必须小于 index2。
 */

/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 * 一点点遍历
 */
var twoSum = function(numbers:number[], target:number):number[] {
  let start=0;
  let end=numbers.length-1;
  while(start<end){
    let sum=numbers[start]+numbers[end];
    if(sum>target){
      end--;
    }else if(sum<target){
      start++;
    }else{
      return [start+1,end+1];
    }
  }
  return [-1,-1];
};