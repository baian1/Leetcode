/**
 * 数字解密，小王不小心把真的藏宝图掉到了一堆假藏宝图里边，发挥你们的大脑，找出藏宝图的编号。已知有一串数字  10110101111001100 ，经过初步猜测，可能是一个二进制数
 * 1、第一步我们先把以上的二进制转换为10进制。
 * 2、这时候我们又有新的线索   >> 30  ,难道是他把原数右移了30位吗？
 * 4、又有新的线索，  上面说了他说右移30位，我们就左移30位，但是这个地方左移可能不会成功，需要大家动脑自行想办法 
 * 5、左移30位后得出的 是个类似于二进制的数，我们在其转换成10进制。
 * 6、计算出左移30位后的数并且计算出包含他在里边的他下面有多少个质数
 * 7、用他质数的个数减去 第一步中转换的十进制数就是藏宝图的编号
 */


//计算质数个数
const countPrimes = function (n: any) {
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


export const findTreasure = () => {
  let One = parseInt('10110101111001100', 2);

  //左移三十位
  let Two = One >>> 0;
  for (let i = 0; i < 30; i++) {
    Two = (Two & 0x7ffffff) === 0 ? Two << 1 : (Two << 1) + 1;
  }
  const countNumber = countPrimes(Two);
  return countNumber - One;
}