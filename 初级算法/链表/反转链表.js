"use strict";

const fun1 = require('./tool');

/*
迭代反转链表
 */
/*
const head=fun1.ListInitial([]);
const reverseList = function(head) {
  if(head===null){
    return 666;
  }
  let star = new fun1.ListNode();
  let end = new fun1.ListNode();
  end.val = head.val;
  star.next = end;
  head = head.next;
  while (head){
    let starNext = new fun1.ListNode();
    starNext.val = head.val;
    starNext.next = end;
    star.next = starNext;
    end = starNext;
    head = head.next;
  }
  return star.next;
};
*/
/*
递归算法
 */
/*
const head=fun1.ListInitial([1,2,3,5,7,3]);
const reverseList = function(head) {
  if(head===null){
    return head;
  }
  if(head.next===null){
    return head;
  }
  let a;
  let ahead;
  a=reverseList(head.next);
  ahead = a;
  while (a.next){
    a=a.next;
  }
  a.next=new fun1.ListNode();
  a.next.val = head.val;
  return ahead;
};
*/
/*
迭代反转链表
 */
/*
const head=fun1.ListInitial([1,2,3,4]);
const reverseList = function(head) {
  let next;
  let pre;
  while (head){
    next=head.next;//设立坐标
    head.next=pre;//打断与下个节点连接，接到前面去
    pre = head;//pre指针改到开头
    head=next;//head换到下一个坐标点  画图可形象表达
  }
  return pre;
}
*/
/*
递归算法
 */
const head=fun1.ListInitial([0,0]);
const reverseList = function(head) {
  if(head.next===null){
    return head;
  }
  let a=reverseList(head.next);//递归算法的关键就是使head指针的head.next和head间指向相反
  let next=head.next;
  head.next=null;
  next.next=head;
  return a;
};
/*
回文链表
 */
var isPalindrome = function(head) {
  if(head===null || head.next===null){
    return true;
  }
  let old=head;

  let fast=head;
  let slow=head;
  while(fast.next !== null && fast.next.next !== null) {
    fast = fast.next.next;
    slow = slow.next;
  }//快慢指针确定中心点，翻转后半部分

  let newhead=reverseList(slow.next);
  while(old.val===newhead.val){
    old=old.next;
    newhead=newhead.next;
    if(newhead===null){//个数奇，翻转的链表比较短，所以判断短链表
      return true;
    }
  }
  return false;
};
console.log(isPalindrome(head));