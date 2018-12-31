/**
 * 
 * @param nums 
 * 思路，遍历数组，把2往后丢，把0往前丢，遇到1不管
 * 
 * 优化：
 * 1.根据思路改写有点混乱的代码
 * 
 * 代码过程：
 * 1.先是确定开头非0位start与末尾非2位end，遍历指针i，方便换位，进行排序
 * 2.确定循环条件i<=end(=end是由于end位可能是0，也需要换位)
 * 3.进入循环，需要寻找i位为0或2需要进行换位操作的
 * 4.确定结束0位置与开始2位置,i的位置就是自非0位置开始寻找到的非1
 * 5.开始交换，0放到0位置，2放到2位置
 */
const sortColors = function(nums:number[]) {
  if(nums.length===1){
    return nums;
  }
  let start=0;
  let end=nums.length-1;
  let i=0;
  while(true){
    while(nums[start]===0){
      start++;
      i=start;
    }
    while(nums[i]===1){
      i++;
    }
    while(nums[end]===2){
      end--;
    }//确定启示交换位置

    if(i>end){
      break;
    }//判断是否结束

    if(nums[i]===0){
      nums[i]=nums[start];
      nums[start]=0;
      start++;
    }else{
      nums[i]=nums[end];
      nums[end]=2;
      end--;
    }//分别对两种情况进行交换
  }
};

const start2:any=new Date();
sortColors([2,0,2,1,1,0,2,1,0,2]);
const end2:any=new Date();
console.log(end2-start2);