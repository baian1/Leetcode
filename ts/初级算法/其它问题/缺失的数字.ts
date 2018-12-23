const missingNumber = function(nums:number[]) {
  let sum:number=0;
  let maxNumber:number=0;
  let minNumber:number=99999;
  for(let i=0;i<nums.length;i++){
    sum+=nums[i];
    maxNumber=maxNumber<nums[i]?nums[i]:maxNumber;
    minNumber=minNumber<nums[i]?minNumber:nums[i];
  }
  let cha=(maxNumber+minNumber)*(maxNumber-minNumber+1)/2-sum;
  if(cha===0){
    if(minNumber!==0){
      return 0;
    }
    return maxNumber+1;
  }
  else{
    return cha;
  }
};

missingNumber([3,0,1]);