import { initList, ListNode } from "./NodeList";

const l1=initList([2]);
const l2=initList([8,9,9]);

const addTwoNumbers = function(l1:ListNode, l2:ListNode) {
  let head;
  let value=(l1.val+l2.val)%10;
  let state=Math.floor((l1.val+l2.val)/10);
  let node=new ListNode(value);
  head=node;
  while( l1 && l2 ){
    if(l1.next!==null && l2.next!==null){
      l1=l1.next;
      l2=l2.next
    }else{
      break;
    }
    value=(l1.val+l2.val+state)%10;
    state=Math.floor((l1.val+l2.val+state)/10);
    node.next=new ListNode(value);
    node=node.next;
  }
  node.next=l1.next||l2.next;
  while(node.next!==null && state===1){
    node=node.next;
    value=(node.val+state)%10;
    state=Math.floor((node.val+state)/10);
    node.val=value;
  }
  if(state!==0){
    node.next=new ListNode(state);
  }
  return head;
};

console.dir(addTwoNumbers(l1,l2));