/**
 * @param {number} n
 * @return {boolean}
 * 快乐书有个死循环，是4开始的，判断遇到4就退出
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