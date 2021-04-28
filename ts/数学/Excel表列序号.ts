/**
 * @param {string} s
 * @return {number}
 * 通过建立字典查询对应数字
 * 遍历字符计算
 * 
 * 优化
 * 1.对于位的数字，直接*26往上
 * 2.字典可以舍去，直接操作
 */

var titleToNumber = function(s:string):number {
  const initMap=function(){
    let Map:{[index:string]:number}={};
    for(let i=65;i<=90;i++){
      let char=String.fromCharCode(i);
      Map[char]=i-64;
    }
    return Map;
  }
  const map=initMap();
  let sum=0;//统计和
  let current=1;
  for(let i=s.length-1;i>=0;i--){
    sum+=current*(s[i].charCodeAt(0)-64);
    current*=26;
  }
  return sum;
};

titleToNumber('AB')