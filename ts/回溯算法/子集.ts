/**
 * 
 * @param nums 
 * 类似树状，第一个结点选不选，第二个结点选不选
 * 状态的回溯
 */
const subsets = function(nums:number[]) {
  let list:number[][]=[];//存储结果
  let current:number[]=[];//状态保存
  const getlist=function(nums:number[],start:number,end:number){
    if(start===end){
      list.push([...current]);
      return;
    }//约束条件

    current.push(nums[start]);
    getlist(nums,start+1,end);
    current.pop();//分支1，选择结点
  
    getlist(nums,start+1,end);//分支2，不选择结点
  }
  getlist(nums,0,nums.length);
};

const start1:any=new Date();
subsets([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17]);
const end1:any=new Date();
console.log(end1-start1);