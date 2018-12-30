/**
 * 
 * @param n 
 * 深度遍历
 */
const generateParenthesis = function(n:number) {
  let list:string[]=[];
  let zhan:string[]=[];
  let timer={
    left:0,
    right:0,
    max:n
  }//记录括号个数
  const getKuohao=function(n:number){
    if(n===0){//达成条件
      list.push(zhan.join(''));
      return;
    }
    if(timer.left<timer.right){//限制条件
      return;
    }

    if(timer.left<timer.max){
      zhan.push('(');
      timer.left++;
      getKuohao(n-1);
      zhan.pop();
      timer.left--;
    }
    if(timer.right<timer.max){
      zhan.push(')');
      timer.right++;
      getKuohao(n-1);
      zhan.pop();
      timer.right--;
    }//进行遍历
  }
  getKuohao(n*2);
  return list;
};


generateParenthesis(3)