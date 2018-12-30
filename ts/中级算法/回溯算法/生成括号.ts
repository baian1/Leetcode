/**
 * 
 * @param n 
 * 深度遍历
 */
const generateParenthesis = function(n:number) {
  let list:string[]=[];
  let str:string='';

  const getKuohao=function(left:number,right:number,str:string){
    if(right<left){
      return;
    }
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