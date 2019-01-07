/**
 * @param {number} n
 * @return {boolean}
 */
const isHappy = function(n:number):boolean {
  let current=0;
  while(current!==4){
    current=0;
    while(n!==0){
      let num=n%10;
      current+=Math.pow(num,2);
      n=Math.floor(n/10);
    }
    n=current;
    if(n===1){
      return true;
    }
  }
  return false;
};

isHappy(3);