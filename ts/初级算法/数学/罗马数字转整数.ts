const romanToInt = function(s:string) {
  if(/^[IVXLCDM]+$/.test(s)===false){
    return 'this is not Rome number';
  }
  let strArr:string[]=s.split('');
  let current:string[]=[];
  let sum=0;
  while(strArr.length!==0){
    while(current.length!==2 && strArr.length!==0){
      current.push(strArr.shift() as string);
    }
    if(RomeList[current.join('')]===undefined){
      sum+=RomeList[current[0]];
      current.shift();
    }
    else{
      sum+=RomeList[current.join('')];
      current.splice(0,2);
    }
  }
  if(current[0]!==undefined){
    sum+=RomeList[current[0]];
  }
};
const RomeList:{[index: string]:number}={
  I:1,
  IV:4,
  V:5,
  IX:9,
  X:10,
  XL:40,
  L:50,
  XC:90,
  C:100,
  CD:400,
  D:500,
  CM:900,
  M:1000,
}
romanToInt('III');