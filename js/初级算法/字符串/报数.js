"use strict";
const countAndSay = function(n) {
  let result;
  if(n===1) {
    result=1;
    return result.toString();
  }
  //用递归来执行
  result=countAndSay(n-1);
  let arr=[];
  let shuzi=0;
  let geshu=0;
  let i;
  for(i of result){
    if(shuzi===i){
      geshu+=1;
    }
    else {
      arr.push(geshu,shuzi);
      shuzi=i;
      geshu=1;
    }
  }
  arr.push(geshu,shuzi);
  return arr.join('').slice(2);
};
console.log(countAndSay(10));
