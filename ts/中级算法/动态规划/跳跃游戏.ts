/**
 * @param {number[]} nums
 * @return {boolean}
 * 跳跃位置会在0时可能停止，只要判断能不能跳过0点就行了
 */
const canJump = function(nums:number[]):boolean {
  let length=nums.length;
  for(let i=0;i<length-1;i++){
    if(nums[i]===0){
      let j=i;
      while(j>=0){
        if(nums[j]+j>i){
          break;
        }else{
          j--;
        }
      }
      if(j<0){
        return false;
      }
    }
  }
  return true;
};

canJump([2,0,0]);