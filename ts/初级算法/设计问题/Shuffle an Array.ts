/**
 * 使用了洗牌算法来实现随机输出
 */
class Solution {
  origin:number[];
  current:number[];
  length:number;
  constructor(n:number[]){
    this.origin=n;
    this.length=n.length;
    this.current=[...this.origin];
  }

  shuffle(){
    let temp:number;
    let i=0;
    for(i;i<this.length-1;i++){
      let roll=Math.floor(Math.random()*(this.length-i)+i);
      temp=this.current[i];
      this.current[i]=this.current[roll];
      this.current[roll]=temp;
    }
    return this.current;
  }

  reset(){
    return this.origin;
  }
}