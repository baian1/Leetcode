const permute = function(nums:number[]) {
  let isUsed=Array(nums.length).fill(false);
  let list:number[][]=[];
  let current:number[]=[];
  const getlist=function(nums:number[],current:number[]){
    if(current.length===nums.length){
      list.push([...current]);
      return;
    }
    let i=0;
    for(i;i<nums.length;i++){
      if(!isUsed[i]){
        current.push(nums[i]);
        isUsed[i]=true;
        getlist(nums,current);
        isUsed[i]=false;
        current.pop();
      }
    }
  }
  getlist(nums,current);
  return list;
};
const nums6=[1,2,3];
permute(nums6);