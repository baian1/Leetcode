"use strict";

const fun1 = require('./tool');
/*
快慢指针解法
 */
/*
const hasCycle = function(head) {
  if (head == null || head.next == null) {
    return false;
  }
  let slow=head;
  let fast=head.next;
  while(slow!==fast){
    if (fast === null || fast.next === null) {
      return false;
    }
    slow=slow.next;
    fast=fast.next.next;
  }
  return true;
};
*/
/*
哈希表解法
需要注意的是对象hash中[]内的对象都会被调用toString方法
我们这里放入对象查询对象
应该使用new Map();
调用set与get方法
 */
const head=fun1.ListInitial([1,2]);
var hasCycle = function(head) {
  if (head === null || head.next === null) {
    return false;
  }
  let hash=new Map();
  while(head!==null){
    if(hash.get(head)!==1){
      hash.set(head,1)
      head=head.next;
      continue;
    }
    return true;
  }
  return false;
};
console.log(hasCycle(head));