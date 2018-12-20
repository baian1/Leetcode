/**
 * 
 * @param prices 
 * 找到第一个峰谷后，找峰顶，峰顶-峰谷获得利润差
 * 遇到下一个更低的峰谷，重新找利润差
 */
const maxProfit = function(prices:number[]):number {
  let minPrice=prices[0]
  let lirun=0;
  for(let i=1;i<prices.length;i++){
    if(prices[i]<minPrice){
      minPrice=prices[i];
    }
    else if(lirun<prices[i]-minPrice){
      lirun=prices[i]-minPrice;
    }
  }
  return lirun;
};

console.log(maxProfit([3,2,5,1,2]));