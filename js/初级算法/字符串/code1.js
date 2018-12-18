/**
 * @param {string} s
 * @return {string}
 */
var reverseString = function(s) {
  let i=s.length-1;
  let strnew='';
  for(i;i>=0;i--){
    strnew+=s[i];
  }
  return strnew;
};
