/**
 * 
 * @param n 
 * 深度遍历
 */
const generateParenthesis = function(n:number) {
  let list:string[]=[];//存储结果序列
  let str:string='';//存储括号字符
  /**
   * 
   * @param left 
   * @param right 
   * @param str 
   * 剩余左括号，右括号，和已有括号
   */
  const getKuohao=function(left:number,right:number,str:string){
    if(right<left){
      return;
    }//防止出现不符合规则的括号序列
    if(left===0 && right===0){
      list.push(str);
    }else{
      if(left>0){
        getKuohao(left-1,right,str+'(');
      }
      if(right>0){
        getKuohao(left,right-1,str+')');
      }
    }
  }
  getKuohao(n,n,str);
  return list;
};


generateParenthesis(3)