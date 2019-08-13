import { swap } from "./swap";

/**
 * 冒泡排序,每次循环取到最大的数或最小的数到合适位置
 * @param nums 
 */
const sortMaopao=function(nums:number[]):void{
  for(let i=0;i<nums.length-1;i++){
    let didSwap = false;
    for(let j=i+1;j<nums.length;j++){
      if(nums[i]<nums[j]){
        swap(nums,i,j)
        didSwap=true
      }
    }
    if(didSwap===false){
      return
    }
  }
}

let nusm:number[]=[1,2,4,6,3];
sortMaopao(nusm);