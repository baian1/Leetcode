var removeDuplicates = function(nums) {
  let i=0;
  let j=1;
  for(i;i<nums.length-1;i++){
    if(nums[i]===nums[i+1]){
      continue;
    }
    nums[j]=nums[i+1];
    j++;
  }
  return nums.slice(0,j);
};
let nums = [0,0,1,1,1,2,2,3,3,4];
console.log(removeDuplicates(nums));
