const isPowerOfThree = function(n:number) {
  if(n===0){
    return false;
  }
  let result=Math.log(n)/Math.log(3);
  let result2=Math.round(result);
  return Math.pow(3,result2)===n;
};
console.log(isPowerOfThree(9));