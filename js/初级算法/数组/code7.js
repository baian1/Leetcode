/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {
  let jiewei=0;
  for(let i = digits.length-1;i>=0;i--){
    if(i===digits.length-1){
      digits[i]+=1;
    }
    else {
      digits[i]+=jiewei;
      jiewei=0;
    }
    jiewei=parseInt(digits[i]/10);
    digits[i]%=10;
  }
  if(jiewei===1){
    digits.unshift(1);
  }
  return digits;
};

console.log(plusOne([4,3,2,1]));
