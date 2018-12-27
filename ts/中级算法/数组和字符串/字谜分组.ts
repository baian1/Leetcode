/**
 * 
 * @param {string[]} strs
 * @return {string[][]}
 * 1.先将其排序后，再与已有字符进行对比
 */
const groupAnagrams = function(strs:string[]):string[][] {
  let hashMap:{[index: string]:number}={};
  let arr:string[][]=[];
  for(let i=0;i<strs.length;i++){
    let currentString=strs[i].split('').sort().join('');
    if(hashMap[currentString]!==undefined){
      arr[hashMap[currentString]].push(strs[i]);
    }
    else{
      arr.push([strs[i]]);
      hashMap[currentString]=arr.length-1;
    }
  }
  return arr;
};

const strs=["eat", "tea", "tan", "ate", "nat", "bat"];
groupAnagrams(strs);