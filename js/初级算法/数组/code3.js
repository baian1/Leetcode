/*
var weiyione = (nums) =>{
  let i=nums.length-1;
  let zuihou=nums[nums.length-1]
  for(i;i>0;i--){
    nums[i]=nums[i-1];
  }
  nums[i]=zuihou;
};
var rotate = function(nums, k) {
  while (k){
    weiyione(nums);
    k--;
  }
};
let nums=[-1];
let k=2;
rotate(nums,k);
console.log(nums);
*/
var rotate = function(nums, k) {
  k=k%nums.length;
  nums.unshift(...nums.splice(nums.length-k));
};
let nums=[1,2,3,4,5,6,7];
let k=3;
rotate(nums,k);
console.log(nums);
