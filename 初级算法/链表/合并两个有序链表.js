"use strict";

const fun1 = require('./tool');

const mergeTwoLists = function(l1, l2) {
  if(l1===null || l2===null){
    if(l1===null){
      return l2;
    }
    return l1;
  }
  let head=l1.val>l2.val?l2:l1;
  while (l1 && l2){
    let next;
    if(l1.val>l2.val){
      while (l2.next!==null && l2.next.val<l1.val){
        l2=l2.next;
      }
      next=l2.next;
      l2.next=l1;
      l2=next;
      continue;
    }
    while (l1.next!==null && l1.next.val=<l2.val){
      l1=l1.next;
    }
    next=l1.next;
    l1.next=l2;
    l1=next;
  }
  return head;
};
const l1=fun1.ListInitial([-9,-7,-3,-3,-1,2,3]);
const l2=fun1.ListInitial([-7,-7,-6,-6,-5,-3,2,4]);
console.log(Object.getOwnPropertyDescriptors(mergeTwoLists(l1,l2)));