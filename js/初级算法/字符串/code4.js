"use strict";

const isAnagram = function(s, t) {
  if(s.length!==t.length) return false;
  let hashMap={};
  for(let i of s){
    hashMap[i]=hashMap[i]===undefined?1:++hashMap[i];
  }
  for(let i of t){
    if(hashMap[i]===undefined || hashMap[i]===0){
      return false;
    }
    hashMap[i]--;
  }
  return true;
};

let s = "anagram";
let t = "nagaram";
console.log(isAnagram(s,t));
