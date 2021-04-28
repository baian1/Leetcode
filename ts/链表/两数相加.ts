import { initList, ListNode } from "./NodeList";

const l1=initList([2]);
const l2=initList([8,9,9]);
/**
 * 
 * @param l1 
 * @param l2 
 * 1.创建一个值为0的头结点，用head指针指向它，在最后跳过头结点输出
 * 2.不断将两个链表的结点相加，直到一个链表没有下一个结点
 * 3.判断是不是还有链表有后面的结点，有的话继续加
 * 4.加完后看看是不是有溢出位，有的话加上
 */
const addTwoNumbers = function(l1:ListNode, l2:ListNode) {
  let head;//头指针
  let value=0;//结点值
  let state=0;//进位，标志位
  let node=new ListNode(0);
  head=node;
  while(true){
    value=(l1.val+l2.val+state)%10;
    state=(l1.val+l2.val+state)>9?1:0;
    node.next=new ListNode(value);
    node=node.next;
    if(l1.next!==null && l2.next!==null){
      l1=l1.next;
      l2=l2.next
    }else{
      break;
    }
  }
  node.next=l1.next||l2.next;
  while(node.next!==null && state===1){
    node=node.next;
    value=(node.val+state)%10;
    state=(node.val+state)>9?1:0;
    node.val=value;
  }
  if(state!==0){
    node.next=new ListNode(state);
  }
  return head.next;
};

console.dir(addTwoNumbers(l1,l2));