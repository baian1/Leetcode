/**
 * 单向列表的节点
 * @param {int}
 *
 */

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

var insertionSortList = function(head) {
    if (head==null||head.next==null) return head;
    var newlist = new ListNode();
    newlist.next = head;
    var last = newlist.next;
    while(last.next) {
        let pre = newlist;
        let cur = last.next;
        while (pre.next !== cur && pre.next.val < cur.val) {
            pre = pre.next;
        }
        if (pre.next !== cur) {
            let temp = pre.next;
            let next = cur.next;
            pre.next = cur;
            cur.next = temp;
            last.next = next;
        }
        else {
            last = last.next;
        }
    }
    return newlist.next;
};



var l1 = ListInitial([4,9,1,3,8]);
var l2 = insertionSortList(l1);
console.log(l2);
