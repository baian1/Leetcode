/**
 * 
 * @param {string[]} strs
 * @return {string[][]}
 * 1.将字符转换为数组26个位置字母，对应位置个数表示字母出现次数
 *   返回字符串
 * 2.使用字符串为key,添加进数组
 * 3.遍历hashMap对象将属性值做成数组
 */
const groupAnagrams2 = function(strs:string[]):string[][] {
  let arr=[];
  let hashMap:{[index:string]:string[]}={}
  for(let i=0;i<strs.length;i++){
    let key=getKey(strs[i]);
    if(hashMap[key]===undefined){
      hashMap[key]=[strs[i]];
    }
    else{
      hashMap[key].push(strs[i]);
    }
  }
  for(let i in hashMap){
    arr.push(hashMap[i]);
  }
  return arr;
};

const getKey=function(str:string){
  let arr=Array(26).fill(0);
  let i=0;
  for(i;i<str.length;i++){
    arr[str.charCodeAt(i)-97]++;
  }
  return JSON.stringify(arr);
}

const strs2=["eat", "tea", "tan", "ate", "nat", "bat"];
console.log(groupAnagrams2(strs2));