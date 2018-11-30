var removeKdigits = function(num, k) {
  let zhan=[];
  let i=0;
  let j=0;
  let result=null;
  while (k){
    if(num[j]>=zhan[zhan.length-1] || zhan[zhan.length-1]===undefined){
      zhan.push(num[j]);
    }
    else {
      while (num[j]<zhan[zhan.length-1] && i<k){
        zhan.pop();
        k--;
      }
      zhan.push(num[j]);
    }
    j++;
    if(j===num.length){
      result=zhan.slice(0,zhan.length-k).join('');//如果还需要删除就从末尾开始删
      break;
    }
  }
  result=result===null?(zhan.join('')+num.slice(j)):result;
  let qulin=0;
  for (i in result){
    if(result[i]==='0'){
      qulin++;
      continue;
    }
    break;
  }
  return result.slice(qulin)===''?'0':result.slice(qulin);
};
/*
let num='10200';
 */
console.log(removeKdigits('129',3));
