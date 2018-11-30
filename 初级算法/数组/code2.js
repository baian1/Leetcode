var maxProfit = function(prices) {
  let i=0;//遍历用
  let j=0;//买入指针
  let k=0;//卖出指针
  let state=false;//手中有没有持有股票
  let summoney=0;//累计钱
  for(i;i<prices.length;i++){
    if(prices[i]<prices[i+1]){
      if(!state){
        j=i;
        state=true;
      }
    }
    if(prices[i]>prices[i+1] || i===prices.length-1){
      if(state===true){
        k=i;
        summoney+=prices[k]-prices[j];
        state=false;
      }
    }
  }
  return summoney;
};
console.log(maxProfit([1,2,3,6,5]));
