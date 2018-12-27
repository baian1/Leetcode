/**
 * @param {string} s
 * @return {string}
 * 使用动态规划解法
 * 1.使用p[i][j]表示s[i]...s[j]是不是回文
 * 2.先求出一个字符和两个字符的回文
 * 3.然后按这个顺序往上求3个，4个字符的是否是回文
 */
const longestPalindrome2 = function(s:string):string {
  let p:boolean[][]=Array(s.length);
  let i=0;
  let maxLength=1;
  let res:string=s[i]===undefined?'':s[i];
  for(i;i<s.length;i++){
    p[i]=Array(s.length).fill(false);
  }
  for(let i=0;i<s.length;i++){
    p[i][i]=true;
    if(s[i]===s[i+1] && i+1<s.length){
      res=s[i]+s[i+1];
      maxLength=2;
      p[i][i+1]=true;
    }
  }//初始化数组，让1和2回文为true
  for(let j=2;j<s.length;j++){
    for(let i=0;i<j-1;i++){           //求0-2内回文，0-3内，0-4内
      if(p[i+1][j-1] && s[i]===s[j]){
        p[i][j]=true;
        if(j-i+1>maxLength){
          maxLength=j-i+1;
          res=s.slice(i,j+1);
        }
      }
    }
  }
  return res;
};

const s4="abacab";
console.log(longestPalindrome2(s4));