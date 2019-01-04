const sortMaopao=function(nums:number[]):void{
  for(let i=0;i<nums.length-1;i++){
    for(let j=i+1;j<nums.length;j++){
      if(nums[i]<nums[j]){
        let cur:number;
        cur=nums[i];
        nums[i]=nums[j];
        nums[j]=cur;
      }
    }
  }
}

let nusm:number[]=[1,2,4,6,3];
sortMaopao(nusm);