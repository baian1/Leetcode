"use strict";
//已知一个节点删除此节点
const fun1=require('./tool');

const head = fun1.ListInitial([4,5,1,9]);
const node=head.next.next;
const deleteNode = function (node) {
  node.val=node.next.val;
  node.next=node.next.next;
};
deleteNode(node);
console.log(head);
