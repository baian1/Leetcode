/**
 * 
 * @param nums 
 */
const subsets = function(nums:number[]) {
  let list:number[][]=[];
  let current:number[]=[];
  const getlist=function(nums:number[],start:number,end:number){
    if(start===end){
      list.push([...current]);
      return;
    }

    current.push(nums[start]);
    getlist(nums,start+1,end);
    current.pop();
  
    getlist(nums,start+1,end);
  }
  getlist(nums,0,nums.length);
};

const start1:any=new Date();
subsets([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17]);
const end1:any=new Date();
console.log(end1-start1);