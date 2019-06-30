/**
 * Definition for undirected graph.
 * function UndirectedGraphNode(label) {
 *     this.label = label;
 *     this.neighbors = [];   // Array of UndirectedGraphNode
 * }
 */

class UndirectedGraphNode {
  label: number;
  neighbors: UndirectedGraphNode[];
  constructor(label: number) {
    this.label = label;
    this.neighbors = []
  };
  addneighbors(node: UndirectedGraphNode): void {
    this.neighbors.push(node);
  }
}
/**
 * @param {UndirectedGraphNode} graph
 * @return {UndirectedGraphNode}
 * dfs
 */
var cloneGraph = function (graph: UndirectedGraphNode):UndirectedGraphNode {
  let head=new UndirectedGraphNode(graph.label);
  let hash={head:true};
  let visit:{[index:number]:Boolean}={};
  let queun=[];
  let map=[head];
  const dfs=function(head:UndirectedGraphNode){
    if(head.neighbors.length!==0){
      for(let i of head.neighbors){
      }
    }
  }
  return head;
};