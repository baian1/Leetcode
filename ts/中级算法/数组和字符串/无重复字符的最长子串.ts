/**
 * 
 * @param s 
 * 使用正则来判断是否有重复字符
 */
const lengthOfLongestSubstring = function(s:string) {
  let str:string='';
  let i:number=0;
  let maxLength:number=0;
  for(i;i<s.length;i++){
    let reg;
    if(/[a-z0-9A-Z]/.test(s[i])){
      reg=new RegExp(`\[${s[i]}\]`,'g');
    }
    else{
      reg=new RegExp(`\\${s[i]}`,'g');
    }
    
    if(!(reg.test(str))){
      str+=s[i];
    }
    else{
      maxLength=maxLength>str.length?maxLength:str.length;
      str=str.slice(str.indexOf(s[i])+1)+s[i];
    }
  }
  maxLength=maxLength>str.length?maxLength:str.length;
  return maxLength;
};

const s = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!\"#$%&'()*+,-./:;<=>?@[\\]^_`{|}~ abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!\"#$%&'()*+,-./:;<=>?@[\\]^_`{|}~ abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!\"#$%&'()*+,-./:;<=>?@[\\]^_`{|}~ abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!\"#$%&'()*+,-./:;<=>?@[\\]^_`{|}~ abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!\"#$%&'()*+,-./:;<=>?@[\\]^_`{|}~ ";
lengthOfLongestSubstring(s);
