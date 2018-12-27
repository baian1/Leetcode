/**
 * @param {string} s
 * @return {string}
 * 使用中心扩展算法
 */
const longestPalindrome = function(s:string):string {
  let i:number;
  let start:number=0;
  let end:number=0;
  for(i=0;i<s.length;i++){

    let length1=expandAroundCenter(s,i,i);
    let length2=expandAroundCenter(s,i,i+1);
    let length=Math.max(length1,length2);
    if(length>end-start){
      if(length%2===0){
        start=i-length/2+1;
        end=i+length/2
      }
      else{
        start=i-Math.floor(length/2);
        end=i+Math.floor(length/2);
      }
    }
  }
  return s.slice(start,end+1);
};

const expandAroundCenter = function(s:string,start:number,end:number){
  while(s[start]===s[end] && start>=0 && end<=s.length-1){
    start--;
    end++;
  }
  return end-start+1-2;
}

const s3="babad";
console.log(longestPalindrome(s3));