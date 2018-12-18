"use strict"
/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
  let i=0;
  let zero=0;
  while (nums[i]!==undefined) {
    if(nums[i]===0){
      zero++;
      nums.splice(i,1);
    }
    else {
      i++;
    }
  }
  while (zero>0){
    nums.push(0);
    zero--;
  }
};
let nums=[0,1,0,3,12];
moveZeroes(nums);
console.log(nums);
