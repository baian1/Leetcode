/**
 * @param {number[]} nums
 * @return {number}
 * 设置一个递增数列，用来存储最长子序列
 * 每遇到一个数，就去更新递增序列，就像一个序列叠加好多种状态一样
 * 比如下面的数组
 * 1.
 * 2
 * 
 * 2.
 * 25
 * 
 * 3.
 * 25
 * 23
 * 
 * 4.
 * 25舍去了
 * 234
 * 
 * 5.
 * 234
 * 1
 * 
 * 6.
 * 2347
 * 1  7
 * 
 * 7.
 * 2346
 * 1  6
 */
var lengthOfLIS = function(nums:number[]):number {
  let ans=[];
  ans[0]=nums[0];
  for(let i=1;i<nums.length;i++){
    let left=0;
    let right=ans.length-1;
    if(ans[right]<nums[i]){
      ans.push(nums[i]);
      continue;
    }//如果比较大，直接添加到尾部

    while(left<right){
      let middle=Math.floor((left+right)/2);
      if(ans[middle]<nums[i]){
        left=middle+1;
      }else{
        right=middle;
      }
    }
    ans[left]=nums[i];//二分查找找到需要更改的位置
  }
  return ans.length;
};

lengthOfLIS([2,5,3,4,1,7,6]);