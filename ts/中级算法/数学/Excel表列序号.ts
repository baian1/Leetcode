/**
 * @param {string} s
 * @return {number}
 * 通过建立字典查询对应数字
 * 遍历字符计算
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
  let wei=0;//判断是在那个位置，需要23^wei
  for(let i=s.length-1;i>=0;i--){
    let current=Math.pow(26,wei);
    sum+=current*map[s[i]];
    wei++;
  }
  return sum;
};

titleToNumber('AB')