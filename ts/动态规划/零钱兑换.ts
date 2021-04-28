/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 * 使用for循环比of更快
 * 
 * 首先创建一个数组记录所需硬币最小数
 * 然后从最小开始遍历
 * 大于硬币才有可能有由此硬币组成，筛掉一些小数据对于大硬币的操作（比如取6，还拿20硬币去操作，舍去这种操作），加快速度
 * 
 */
const coinChange = function(coins:number[], amount:number):number {
  if(amount===0){
    return 0;
  }

  const Max=9999999999;
  let arr:number[]=Array(amount+1).fill(Max);
  arr[0]=0;
  let current=1;
  for(current;current<=amount;current++){
    for(let i=0;i<coins.length;i++){
      if(current>=coins[i]){
        if(arr[current]>arr[current-coins[i]]+1){
          arr[current]=arr[current-coins[i]]+1;
        }
      }
    }
  }
  if(arr[amount]===Max){
    return -1;
  }
  return arr[amount];
};

coinChange([1,4,5,6],10);