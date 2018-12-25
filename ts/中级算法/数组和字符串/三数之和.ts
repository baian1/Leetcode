/**
 * 
 * @param newarr 
 * @param oldarr 
 * 用来确定是不是会和前面一个添加的相等
 */
const isRepeat=function(newarr:number[],oldarr:number[]){
  if(newarr.join('')===oldarr.join('')){
    return true;
  }
  else false;
}
/**
 * 
 * @param nums 
 * 1.并对数组排序，确定第一个数
 * 2.在后面的数中寻找相等的数
 * 3.取到相等的数字
 * 4.start++，end--，保证nums中取到的数字是不同的
 * 改进
 * 1.取消了对比是否重复
 */
const threeSum = function(nums:number[]) {
  if(nums.length<=2){
    return [];
  }
  nums.sort((a,b)=>a-b);//对数组进行排序
  let i=0;
  let arr:number[][]=[];
  while(nums[i]<=0){
    let start=i+1;
    let end=nums.length-1;
    while(start<end){
      let result=nums[i]+nums[start]+nums[end];
      if(result<0){
        start++;
      }
      if(result===0){
        let newarr=[nums[i],nums[start],nums[end]];
        arr.push(newarr);
        start++;
        end--;
        while(nums[start]===nums[start-1] && start<end){
          start++;
        }
        while(nums[end]===nums[end+1] && end>start){
          end--;
        }//取到不同的nums[start]与nums[end]
      }
      if(result>0){
        end--;
      }
    }
    i++;
    while(nums[i]===nums[i-1]){
      i++;
    }//取到下一个不同的首位数字
  }
  return arr;
};
const nums=[-4,-2,-2,-2,0,1,2,2,2,3,3,4,4,6,6];
threeSum(nums);