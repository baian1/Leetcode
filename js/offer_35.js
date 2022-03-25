function Node(val, next, random) {
  this.val = val;
  this.next = next;
  this.random = random;
}
var copyRandomList = function (head) {
  const oldNodes = [];
  const newNodes = [];
  let cur = head;
  // 创建节点
  while (cur) {
    let node = null;
    if (oldNodes.includes(cur)) {
      let index = oldNodes.indexOf(cur);
      node = newNodes[index];
    } else {
      oldNodes.push(cur);
      node = new Node(cur.val, null, null);
      newNodes.push(node);
    }

    if (cur.random) {
      let index = oldNodes.indexOf(cur.random);
      let randomNode = null;
      if (index === -1) {
        randomNode = new Node(cur.random.val, null, null);
        oldNodes.push(cur.random);
        newNodes.push(randomNode);
      } else {
        randomNode = newNodes[index];
      }

      node.random = randomNode;
    }

    if (cur.next) {
      let index = oldNodes.indexOf(cur.next);
      let nextNode = null;
      if (index === -1) {
        nextNode = new Node(cur.next.val, null, null);
        oldNodes.push(cur.next);
        newNodes.push(nextNode);
      } else {
        nextNode = newNodes[index];
      }

      node.next = nextNode;
    }
    cur = cur.next;
    node = node.next;
  }

  return newNodes[0];
};
