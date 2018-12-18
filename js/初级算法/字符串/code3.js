'use strict';
var firstUniqChar = function(s) {
  let hashMap={};
  let one=[];
  let i;
  for (i of s){
    if(hashMap[i]===undefined){
      hashMap[i]=1;
      one.push(i);
      continue;
    }
    hashMap[i]++;
    let statu=one.indexOf(i);
    if(statu!==-1) {
      one.splice(statu,1);
    }
  }
  return s.indexOf(one[0]);
};
let s = "loveleetcode";
console.log(firstUniqChar(s));
