const isPrimenumber = function (n: number) {
  let arr: number[] = new Array(n + 1);
  let str: string = arr.join('1');
  let isPrime = /^1$|^(11+?)\1+$/.test(str);//合数返回true;
  return isPrime;
}
export const countPrimes = function (n: any) {
  let notPrime = new Uint8Array(n);
  let isPrime = [];
  let count = 0;
  for (let i = 2; i < n; i++) {
    if (!notPrime[i]) {
      count++;
      isPrime.push(i);
    }
    for (let j = 0; i * isPrime[j] <= n; j++) {
      notPrime[i * isPrime[j]] = 1;
      if (i % isPrime[j] === 0) break;
    }
  }
  return count;
};
