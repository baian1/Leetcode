/**
 * 
 * @param nums 
 * 1.先取得最小的数
 * 2.然后取比最小的数大的数
 * 3.现在就构成了增增的情况
 * 4.分情况分析了，
 *   第一种遇到比最小还小的数，
 *   就会替换第一位，但是对结果没有影响，
 *   只要有比第二位大的数，就是成立的，
 *   之前的一现在的二之后的三，不管现在第一位是什么
 *   
 *   第二种遇到比一大，比二小的数，替换二，
 *   也没有影响，只要有数再比2大就好，还减少后面的数的下限呢
 * 
 */
const increasingTriplet = function(nums:number[]) {
  let min:number=Infinity;
  let middle:number=Infinity;
  for(let i=0;i<nums.length;i++){
    if(nums[i]<=min){
      min=nums[i];
    }
    else if(nums[i]<=middle){
      middle=nums[i];
    }
    else{
      return true;
    }
  }
  return false;
};