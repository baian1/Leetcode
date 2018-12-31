const subsets = function(nums:number[]) {
  let list:number[][]=[];
  let isUsed:boolean[]=Array(nums.length).fill(true);
  let current:number[]=[];
  const getlist=function(nums:number[],n:number){
    if(n===-1){
      list.push([...current]);
      return;
    }

    if(isUsed[n]){
      current.push(nums[n]);
      getlist(nums,n-1);
      isUsed[n]=false;
      current.pop();
    }
    if(!isUsed[n]){
      getlist(nums,n-1);
      isUsed[n]=true;
    }

  }
  getlist(nums,nums.length-1);
};

subsets([1,2,3]);