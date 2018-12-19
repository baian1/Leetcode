/**
 * 
 * @param nums1 
 * @param m 
 * @param nums2 
 * @param n 
 * 指针从尾开始向前
 */
const merge2:(nums1:number[],m:number,nums2:number[],n:number)=>void =
function(nums1:number[], m:number, nums2:number[], n:number){
  let nums1Index=m-1;
  let nums2Index=n-1;
  let i=nums1.length-1;
  
  while(i>=0 && nums1Index!==-1){
    if(nums1[nums1Index]<nums2[nums2Index]){
      nums1[i]=nums2[nums2Index];
      i--;
      nums2Index--;
    }
    else{
      nums1[i]=nums1[nums1Index];
      i--;
      nums1Index--;
    }
  }
  if(nums1Index===-1){
    while(i>=0){
      nums1[i]=nums2[nums2Index];
      i--;
      nums2Index--;
    }
  }
};

(function(){
  let nums1 = [2,0];
  let m = 1;
  let nums2 = [1];
  let n = 1;
  merge2(nums1,m,nums2,n);
})()
