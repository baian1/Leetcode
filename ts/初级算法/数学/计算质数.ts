const isPrimenumber = function(n:number){
  let arr:number[]=new Array(n+1);
  let str:string=arr.join('1');
  let isPrime=/^1$|^(11+?)\1+$/.test(str);//合数返回true;
  return isPrime;
}
const countPrimes = function(n:any) {
  let listPrimne:number[]=[];
  let vis:{[key: number]:boolean}={};
  for(let i=2;i<n;i++){
    if(vis[i]!==true){
      listPrimne.push(i);
    }
    for(let j=0;i*listPrimne[j]<=n;j++){
      vis[i*listPrimne[j]]=true;
      if(i%listPrimne[j]===0) break;
    }
  }
  return listPrimne.join(',');
};

console.log(countPrimes(100));
