"use strict";
/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
  let Number=0;
  for(i in nums){
    Number^=nums[i];
  }
  return Number;
};
console.log(singleNumber([2,2,1]));

