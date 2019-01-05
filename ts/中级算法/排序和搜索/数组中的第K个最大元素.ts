/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 * 每次找出最大的元素
 */
const findKthLargest = function(nums:number[], k:number):number {
  let arr=Array(nums.length).fill(true);
  let maxState:number=0;
  let res:number=0;
  while(k){
    for(let i=0;i<nums.length;i++){
      if(arr[i]){
        if(nums[i]>nums[maxState]){
          maxState=i;
        }
      }
    }
    arr[maxState]=false;
    res=nums[maxState];
    maxState=0;
    while(arr[maxState]===false){
      maxState++;
    }
    k--;
  }
  return res;
};

const nums4=[3,2,3,1,2,4,5,5,6];
const k2=4;

findKthLargest(nums4,k2);