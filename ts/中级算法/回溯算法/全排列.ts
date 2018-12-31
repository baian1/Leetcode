/**
 * 
 * @param nums 
 * 设置一个数组isUsed，表示那个位置的数有没有被使用过
 * 遍历数组，遇到没有被使用过的数，使用它
 * 当current存储数组满时添加它
 */
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
const nums6=[1,2,3,4,5,6,7,8,9,10];
let star:any=new Date();
permute(nums6);
let end:any=new Date();
console.log(end-star);