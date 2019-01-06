/**
 * @param {number[]} nums
 * @return {boolean}
 * 获得所有能跳到的可能进行判断
 */
const canJump = function(nums:number[]):boolean {
  let Max=nums.length-1;
  let arr=Array(Max+nums[Max]).fill(false);
  arr[0]=true;
  for(let i=0;i<nums.length;i++){
    if(arr[i]){
      let current=nums[i];
      while(current){
        arr[i+current]=true;
        current--;
      }
    }
    if(arr[nums.length-1]===true){
      return true;
    }
  }
  return false;
};

canJump([2,3,1,1,4]);