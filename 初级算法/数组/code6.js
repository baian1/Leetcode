"use strict";
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersect = function(nums1, nums2) {
  let hash={};
  let i;
  let arr=[];
  for (i in nums1){
    if(hash[nums1[i]]===undefined){
      hash[nums1[i]]=1;
    }
    else {
      hash[nums1[i]]++;
    }
  }
  for(i in nums2){
    if(hash[nums2[i]]!==undefined && hash[nums2[i]]>0){
      hash[nums2[i]]--;
      arr.push(nums2[i]);
    }
  }
  return arr;
};
let nums1 = [4,9,5], nums2 = [9,4,9,8,4];
console.log(intersect(nums1,nums2));
console.log(2>undefined);
