import { ListNode,initList } from "./NodeList";

const head=initList([1,2,3,4,5]);
/**
 * 
 * @param head 
 * 1.先设置两个指针，表示奇偶位置
 * 2.在设置一个指针，永远指向偶第一位，方便操作
 * 3.换位
 */
const oddEvenList = function(head:ListNode) {
  let odd=head;
  let even=head.next;
  if(even===null){
    return head;
  }
  let oddNext=head.next;
  while(even!==null){
    if(even.next===null){
      break;
    }
    let current:ListNode=even.next;
    odd.next=current;
    even.next=current.next;
    current.next=oddNext;//换位操作

    even=even.next;
    odd=odd.next;//指针指向下面需要换位的地方
  }
  return head;
};

oddEvenList(head);