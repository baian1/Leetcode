import { ListNode, initList } from "./NodeList";

const initjiao=function(intersectVal:number,listA:number[],listB:number[],skipA:number,skipB:number){
  let headA=initList(listA.slice(0,skipA));
  let headB=initList(listB.slice(0,skipB));
  let same=initList(listA.slice(skipA));
  concatList(headA,same);
  concatList(headB,same);
  return [headA,headB];
}

const concatList=function(shou:ListNode,wei:ListNode){
  while(shou.next!==null){
    shou=shou.next;
  }
  shou.next=wei;
}

const intersectVal=8;
const listA=[4,1,8,4,5];
const listB=[5,0,1,8,4,5];
const skipA=2;
const skipB=3;

const [headA,headB]=initjiao(intersectVal,listA,listB,skipA,skipB)

const getIntersectionNode = function(headA:ListNode, headB:ListNode) {
  let current1=headA;
  let current2=headB;
  if(current1===null||current2===null){
    return null;
  }
  while(current1!==current2){
    current1=current1.next===null?headB:current1.next;
    current2=current2.next===null?headA:current2.next;
  }
  return current1;
};

getIntersectionNode(headA,headB);