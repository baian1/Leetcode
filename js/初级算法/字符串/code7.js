"use strict";

const strStr = function(haystack, needle) {
  if(needle==='') return 0;
  return haystack.indexOf(needle);
};

//另一种思路截取一串字符比较
const strStr2 = function (haystack, needle) {
  if(needle==='') return 0;
  let i;
  for(i in haystack){
    if(haystack[i]===needle[0]){
      if(haystack.slice(parseInt(i),parseInt(i)+needle.length)===needle){
        return i;
      }
    }
  }
  return -1;
}

console.log(strStr2('hello','ll'));

