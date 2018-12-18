function ListNode(val) {
  this.val = val;
  this.next = null;
}//单向列表的节点

function ListInitial(arry) {
  var ls = new ListNode();
  var new1 = new ListNode();
  ls.next = new1;
  for (var i in arry){
    new1.val = arry[i];
    if(parseInt(i)===arry.length-1){
      break;
    }
    new1.next = new ListNode();
    new1 = new1.next;
  }
  return ls.next;
}

function ListFind(i,List) {
  let p = ListNode();
  p.next=List
}


function ListInsert(List,index,ListNode) {

}

module.exports = {
  ListInitial,
  ListInsert,
  ListNode,
  ListFind
}
