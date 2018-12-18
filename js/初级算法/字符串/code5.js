"use strict"
const isPalindrome = function(s) {
  let i=0;
  let j=s.length-1;//定义头指针与尾指针
  s=s.toLowerCase();
  let test=/[a-z0-9]/;
  while (i<j){
    while (!test.test(s[i])) {
      i++;
    }
    while (!test.test(s[j])){
      j--;
    }
    if(s[i]===s[j]){
      i++;
      j--;
      continue;
    }
    return false;
  }
  return true;
};
let s="A man, a plan, a canal: Panama";
console.log(isPalindrome(s));
