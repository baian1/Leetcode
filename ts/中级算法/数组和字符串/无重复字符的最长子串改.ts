/**
 * 
 * @param {string} s 
 * @return {number}
 * 直接使用indexof来进行判断字符是否有重复
 */
const lengthOfLongestSubstring2 = function(s:string):number {
  let str:string='';
  let i:number=0;
  let maxLength:number=0;
  for(i;i<s.length;i++){
    let index=str.indexOf(s[i]);
    if(index===-1){
      str+=s[i];
    } 
    else{
      maxLength=maxLength>str.length?maxLength:str.length;
      str=str.slice(index+1)+s[i];
    }
  }
  maxLength=maxLength>str.length?maxLength:str.length;
  return maxLength;
};

const s2 = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!\"#$%&'()*+,-./:;<=>?@[\\]^_`{|}~ abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!\"#$%&'()*+,-./:;<=>?@[\\]^_`{|}~ abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!\"#$%&'()*+,-./:;<=>?@[\\]^_`{|}~ abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!\"#$%&'()*+,-./:;<=>?@[\\]^_`{|}~ abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!\"#$%&'()*+,-./:;<=>?@[\\]^_`{|}~ ";
lengthOfLongestSubstring2(s2);
