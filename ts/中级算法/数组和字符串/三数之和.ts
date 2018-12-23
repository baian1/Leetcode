const isRepeat=function(newarr:number[],oldarr:number[]){
  if(newarr.join('')===oldarr.join('')){
    return true;
  }
  else false;
}
const threeSum = function(nums:number[]) {
  if(nums.length<=2){
    return [];
  }
  nums.sort((a,b)=>a-b);
  let i=0;
  let arr:number[][]=[];
  while(nums[i]<=0){
    let start=i+1;
    let end=nums.length-1;
    while(start>=end){
      let result=nums[i]+nums[start]+nums[end];
      if(result<0){
        start++;
      }
      if(result===0){
        let newarr=[nums[i],nums[start],nums[end]];
        if(arr.length===0 || !isRepeat(newarr,arr[arr.length-1])){
          arr.push(newarr);
        }
        start++;
        end--;
      }
      if(result>0){
        end--;
      }
    }
    i++;
    if(nums[i]===nums[i-1]){
      i++;
    }
  }
  return arr;
};
const nums=[-1,0,1,2,-1,-4];
threeSum(nums);