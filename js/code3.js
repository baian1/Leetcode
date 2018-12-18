/**
 * 找字符串
 */

/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    if (s.length===0){return 0}
    var long;
    var start=0;
    var end=1;
    var max=end-start;

    while(end<s.length){
        long=s.slice(start,end);
        var str = s[end];
        if(long.indexOf(str)===-1){
            end++;
        }
        else {
            max=end-start>max?end-start:max;
            start=long.indexOf(str)+start+1;
            if(long.indexOf(str)!==end-max){
                end=end+1;
            }
            else end=start+1;
        }
    }
    max=end-start>max?end-start:max;
    return max;
};

var a=8;

console.log(lengthOfLongestSubstring("dvdf"));
