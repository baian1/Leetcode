const reverseBits = function(n:number) {
  let revers:number=0;
  let str:string;
  for(let i=0;i<32;i++){
    revers=revers<<0;
    revers=revers|(n & 1);
    n=n>>1;
  }
  return revers.toString(2);
};
console.log(reverseBits(0b11111111111111111111111111111101))