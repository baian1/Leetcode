/**
 * 1.将数组排序
 * 2.确定开头的数字小于0
 * 3.在后面的数字中寻找相等的
 * 4.输出结果
 */
onsole.log(parseInt(-2)>parseInt(-3));

function arrIsRepeat(oldarr,newarr) {
  let pattern=new RegExp(' '+newarr+' ');
  return pattern.test(oldarr);
}

var threeSum = function(inputnums) {
  let arr=[];
  let i;
  let nums=inputnums.sort((one,two)=>parseInt(one)-parseInt(two));
  for(i in nums){
    if(nums[i]>0){break;}
    if(nums[i]===nums[i-1]){continue;}
    let j=parseInt(i)+1,k=nums.length-1;
    while (j<k){
      if(nums[j]+nums[k]===-nums[i]){
        arr.push([nums[i],nums[j],nums[k]]);
        while(nums[j]===nums[j+1] && nums[j]+nums[k]<-nums[i]){
          j++;
        }
        while(nums[k]===nums[k-1] && nums[j]+nums[k]>-nums[i]){
          k--;
        }
        j++;k--;
        continue;
      }
      if(nums[j]+nums[k]<-nums[i]){
        j=j+1;
        continue;
      }
      if(nums[j]+nums[k]>-nums[i]){
        k=k-1;
        continue;
      }
    }
  }
  return arr;
};
let nums = [3,0,-2,-1,1,2];
console.log(threeSum(nums));
