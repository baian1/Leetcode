/**
 * 
 * @param nums 
 * 思路，遍历数组，把2往后丢，把0往前丢，遇到0不管
 */
const sortColors = function(nums:number[]) {
  if(nums.length===1){
    return nums;
  }
  let start=0;
  let end=nums.length-1;
  let i=0
  while(i<=end){
    while(nums[end]===2){
      end--;
    }
    if(i>end){
      break;
    }

    while(nums[i]===2){
      let current;
      current=nums[i];
      nums[i]=nums[end];
      nums[end]=current;
      while(nums[end]===2){
        end--;
      }
      continue;
    }
    while(nums[start]===0){
      start++;
      i=start;
      continue;
    }

    while(nums[i]===0){
      let current;
      current=nums[start];
      nums[start]=nums[i];
      nums[i]=current;
      while(nums[start]===0){
        start++;
      }
      i=start;
      continue;
    }
    
    while(nums[i]===1){
      i++;
    }
  }
};

sortColors([2,2]);