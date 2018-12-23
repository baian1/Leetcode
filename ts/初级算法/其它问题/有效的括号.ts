const map:{[i:string]:string}={
  '(':')',
  '{':'}',
  '[':']',
}

const isValid = function(s:string) {
  if(s===''){
    return true;
}
  const ru=['[','{','('];
  try{
    if(!/^[\(\)\{\}\[\]]+$/.test(s)){
      throw new TypeError('输入格式错误');
    }
    let stack:string[]=[];
    for(let i of s){
      if(ru.indexOf(i)>=0){
        stack.push(i);
      }
      else{
        let get=stack.pop() as string;
        if(i!==map[get]){
          throw new TypeError('不是有效的括号');
        }
      }
    }
    return stack.length===0;
  }
  catch(e){
    console.log(e.message);
    return false;
  }
};
isValid('()')