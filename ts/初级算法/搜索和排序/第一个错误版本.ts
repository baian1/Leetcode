const isBadVersion=function(version:number):boolean{
  if(version>=2){
    return true;
  }
  else return false;
}

const solution=(n:number):number=>{

  let middle:number=Math.round((1+n)/2);
  let star=1;
  let end=n;
  while(middle!==end){
    if(!isBadVersion(middle)){
      star=middle;
      middle=Math.round((star+end)/2);
      continue;
    }
    end=middle;
    middle=Math.round((star+end)/2);
  }
  if(star===1){
    if(isBadVersion(star)){
      return 1;
    }
  }
  return(middle);
}

console.log(solution(234));
