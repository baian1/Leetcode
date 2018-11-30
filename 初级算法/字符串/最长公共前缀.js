"use strict";

const longestCommonPrefix = function(strs) {
  if(strs.length===0){
    return '';
  }
  if(strs.length===1){
    return strs[0];
  }//特殊情况
  let i=0;
  let j=0;
  let str='';
  let wei;
  while (j<strs[0].length){
    if(i===0){
      wei=strs[i][j];
    }
    if(strs[i][j]===strs[i+1][j]){
      i++;
      if(i===strs.length-1){
        str=str+wei;
        j++;
        i=0;
      }
      continue;
    }
    break;
  }
  return str;
};

console.log(longestCommonPrefix(['','']));
