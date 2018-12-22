/**
 * 
 * @param s 
 * 一般情况遍历一直加
 * 依照罗马数的特殊规则，IV小的数在大的数前面时表示V-I
 * 当判断为这种状况的时候，减去两个I
 */
const romanToInt2 = function(s:string) {
  if(/^[IVXLCDM]+$/.test(s)===false){
    return 'this is not Rome number';
  }
  let current:string;
  let pre:string='';
  let sum=0;
  for(let i of s){
    current=i;
    if(RomeList2[current]>RomeList2[pre] && RomeList2[pre]!==undefined){
      sum+=RomeList2[current];
      sum-=2*RomeList2[pre];
      continue;
    }
    sum+=RomeList2[current];
    pre=i;
  }
  return sum;
};
const RomeList2:{[index: string]:number}={
  I:1,
  V:5,
  X:10,
  L:50,
  C:100,
  D:500,
  M:1000,
}
romanToInt2('III');