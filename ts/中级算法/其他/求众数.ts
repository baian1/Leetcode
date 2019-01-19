/**
 * @param {number[]} nums
 * @return {number}
 * 使用暴力算法直接遍历
 */
var majorityElement = function(nums:number[]):number {
  let map:{[index:number]:number}={};
  let n=nums.length/2;
  for(let i of nums){
    if(map[i]===undefined){
      map[i]=1;
    }else{
      map[i]++;
      if(map[i]>n){
        return i;
      }
    }
  }
  return 0;
};