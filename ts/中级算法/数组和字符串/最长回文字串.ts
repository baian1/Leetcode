/**
 * @param {string} s
 * @return {string}
 * 使用动态规划解法
 */
const longestPalindrome = function(s:string):string {
  let i:number;
  let res:string='';
  for(i=0;i<s.length;i++){
    let start=i;
    let end=start+1;
    let current1='';
    let current2=s[start];
    while(s[start]===s[end]){
      if(start===-1||end===s.length){
        break;
      }
      current1=s[start]+current1+s[end];
      start--;
      end++;
    }
    start=i;
    end=start+1;
    while(s[start-1]===s[end]){
      if(start-1===-1||end===s.length){
        break;
      }
      current2=s[start-1]+current2+s[end];
      start--;
      end++;
    }
    let current=current1.length>current2.length?current1:current2;
    res=res.length>current.length?res:current;
  }
  return res;
};

const s3="a";
console.log(longestPalindrome(s3));