/**
 * @param {string} s
 * @return {string}
 * Manacher 算法
 * https://segmentfault.com/a/1190000008484167#articleHeader2
 * 1.先将字符串转换为奇数，方便求，在开头加上$防止溢出
 * 2.通过p[i]记录每个位置的回文半径长度
 * 3.通过id与mx设置最大回文边界
 * 4.若在回文范围内，通过p[i]=Math.min(mx-i,p[2*id-i])先求出p[i]
 * 5.若在外就只能慢慢求了
 */
const longestPalindrome3 = function(s:string):string {
  let s_new=setNewS(s);
  let res:string='';
  let p:number[]=[];
  let maxLength=-1;
  let id:number=0;
  let mx:number=0;
  for(let i=1;i<s_new.length;i++){
    if(i<mx){
      p[i]=Math.min(mx-i,p[2*id-i])
    }
    else{
      p[i]=1;
    }//判断初始回文半径值，减少运算
    
    while(s_new[i-p[i]]===s_new[i+p[i]]){
      p[i]++;
    }//判断回文半径，相等就变大，一只大

    if(p[i]+i>mx){
      id=i;
      mx=p[i]+i;
    }//最大回文边界改变

    if(p[i]>maxLength){
      maxLength=p[i];
      res=s_new.slice(i-p[i]+1,i+p[i]);
    }//获得回文，改变最大长度
  }
  return res.replace(/#/g,'');
};
const setNewS=function(s:string){
  let arr=s.split('');
  let str=arr.join('#');
  str='$#'+str+'#';
  return str;
}
const s5="abacab";
console.log(longestPalindrome3(s5));