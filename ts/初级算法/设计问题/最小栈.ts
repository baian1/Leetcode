class MinStack{
  stack:number[]=[];
  
  push(n:number){
    this.stack.push(n);
  }

  pop(){
    if(this.stack.length===0){
      console.log('栈为空');
    }
    this.stack.pop();
  }

  top(){
    return this.stack[this.stack.length-1];
  }

  getMin(){
    let i;
    let minPara=this.stack[0];
    for(i=1;i<this.stack.length;i++){
      minPara=this.stack[i]<minPara?this.stack[i]:minPara;
    }
    return minPara;
  }
}