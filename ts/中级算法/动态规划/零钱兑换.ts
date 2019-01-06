/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
const coinChange = function(coins:number[], amount:number):number {
  if(amount===0){
    return 0;
  }

  let arr:number[]=Array(amount+1).fill(Number.MAX_VALUE);
  arr[0]=0;
  let current=1;
  while(current<=amount){
    for(let i of coins){
      if(current>=i){
        if(arr[current]>arr[current-i]+1){
          arr[current]=arr[current-i]+1;
        }
      }
    }
    current++;
  }

  return arr[amount];
};

coinChange([1,4,5,6],10);