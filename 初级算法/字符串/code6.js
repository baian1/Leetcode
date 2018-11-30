"use strict";

const INT_MAX=Math.pow(2,32)-1;
const INT_MIN=-Math.pow(2,32);
const myAtoi = function(str) {
  str=str.trim();
  const test=/^[^+-\d]/;
  let arr=[];
  if(test.test(str)){
    return 0;
  }
  for(let i of str){
    if(!test.test(i)){
      arr.push(i);
    }
    else break;
  }//去除开头字符
  return arr;
/*
  str=parseInt(str);
  if(isNaN(str)){
    return 0;
  }
  if(str>INT_MAX){
    return INT_MAX;
  }
  if(str<INT_MIN){
    return INT_MIN;
  }
  return str;
*/
};
let str="-123sadwordsand987";
console.log(myAtoi(str).join(''));
