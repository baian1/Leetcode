"use strict"
//使用双指针间隔n个，当后面的指针指向null时就可以删除前指针的节点

const fun1 = require('./tool');
const head=fun1.ListInitial([1,2]);
const n=1;
const removeNthFromEnd = function(head, n) {
  let end;
  let start;
  start = head;

  end=head;
  n--;//初始化后n-1标识第一个节点，将end移动到第n个节点处
  while (n>0){
    end=end.next;
    n--;
  }

  if(end.next===null) {
    return head.next;
  }//当end直接到末尾表示链长度与n相等，删除头节点

  //这时候头节点与尾节点相距n-2
  //要删除的节点与尾节点相距n-2
  //我们是删除的头节点的下一个节点的
  //所以要使end节点向后移动
  end=end.next;
  while (end.next){
    end=end.next;
    start=start.next;
  }
  let deleteNode;
  deleteNode = start.next;
  start.next=start.next.next;
  deleteNode = null;
  return head;
};
console.log(removeNthFromEnd(head,n));
console.log(head);