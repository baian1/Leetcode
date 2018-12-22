const hammingDistance = function(x:number, y:number) {
  let result = x ^ y;
  return result.toString(2).replace(/0/g,'');
};
console.log(hammingDistance(93,73));