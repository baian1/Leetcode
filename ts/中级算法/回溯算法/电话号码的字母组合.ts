const dic:{[index:string]:string[]}={
  '2':['a','b','c'],
  '3':['d','e','f'],
  '4':['g','h','i'],
  '5':['j','k','l'],
  '6':['m','n','o'],
  '7':['p','q','r','s'],
  '8':['t','u','v'],
  '9':['w','x','y','z']
}


const letterCombinations = function(digits:string) {
  let list:string[]=[];
  let zhan:string[]=[];
  getlist_digui(digits,list,zhan);
  return list;
};

const getlist_digui=function(digits:string,list:string[],zhan:string[]){
  if(digits===''){
    list.push(zhan.join(''));
    zhan.pop();
    return;
  }
  let i:number=0;
  for(i;i<dic[digits.slice(0,1)].length;i++){
    zhan.push(dic[digits.slice(0,1)][i]);
    getlist_digui(digits.slice(1),list,zhan);
  }
  zhan.pop();
}

letterCombinations('234');