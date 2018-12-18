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
        if(i==arry.length-1){
            break;
        }
        new1.next = new ListNode();
        new1 = new1.next;
    }
    return ls.next;
}

var l1 = ListInitial([1,8]);
var l2 = ListInitial([0]);
console.log(l1.val);

var addTwoNumbers = function(l1, l2) {

    var header = new ListNode();
    var addlist =new ListNode();
    header.next = addlist;

    var carry = 0;

    while(l1!=null||l2!=null){
        var x = l1? l1.val:0;
        var y = l2? l2.val:0;
        addlist.val = x + y + carry;
        carry = parseInt(addlist.val / 10);
        addlist.val = addlist.val % 10;
        l1 = l1?l1.next:null;
        l2 = l2?l2.next:null;
        if(l1===null&&l2===null){
            break;
        }
        addlist.next = new ListNode();
        addlist = addlist.next;
    }
    if (carry===1){
        addlist.next = new ListNode();
        addlist.next.val = 1;
    }
    return header.next;
};

console.log(addTwoNumbers(l1,l2));

//两数相加



