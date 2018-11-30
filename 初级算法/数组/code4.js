var containsDuplicate = function(nums) {
  let hash={};
  for(let i = 0;i<nums.length;i++){
    if(hash[nums[i]]===undefined){
      hash[nums[i]]=true;
    }
    else {
      return true;
    }
  }
  return false;
};
let nums=[1,2,3,1];
console.log(containsDuplicate(nums));
