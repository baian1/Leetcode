/**
 * @param {number[]} nums
 * @return {number}
 * 从第一个开始，然后长度逐渐增加0-1,0-2,0-3
 * 每次判断出增加的那个的最大子序列长度
 */
var lengthOfLIS = function(nums:number[]):number {
  let times=Array(nums.length).fill(1);
  for(let i=0;i<nums.length;i++){
    for(let j=0;j<i;j++){
      if(nums[i]>nums[j]){
        if(times[j]+1>times[i]){
          times[i]=times[j]+1;
        }
      }
    }
  }
  let max=0;
  for(let i=0;i<times.length;i++){
    if(times[i]>max){
      max=times[i];
    }
  }
  return max;
};

lengthOfLIS([2,5,3,4,1,7,6]);