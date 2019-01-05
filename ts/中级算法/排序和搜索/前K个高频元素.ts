/**
 * 桶排序
 * 1.获取hashMap统计各个数字个数
 * 2.桶排序，在出现个数的位置加上那个数字
 * 3.逆向遍历桶，获得result
 */

var topKFrequent = function(nums:number[], k:number) {
  let hashMap:{[index:number]:number}={};
  for(let i=0;i<nums.length;i++){
    hashMap[nums[i]]=hashMap[nums[i]]===undefined?1:hashMap[nums[i]]+1;
  }
  let arr=Array(nums.length+1);
  for(let i in hashMap){
    if(arr[hashMap[i]]===undefined){
      arr[hashMap[i]]=[i];
    }else{
      arr[hashMap[i]].push(i);
    }
  }
  let result:number[]=[];
  for(let i=arr.length-1;i>0;i--){
    if(arr[i]!==undefined && k!==0){
      result=result.concat(arr[i]);
      k=k-arr[i].length;
    }
  }
  return result;
};
const nums3 = [4,1,-1,2,-1,2,3], k = 2;
topKFrequent(nums3,k);
