/**
 * 
 * @param {string} s
 * 1.统计所有字母个数
 * 2.相加所有字母个数，减去齐数部分 
 * 3.奇数如果是一个，能放在中间不用减，其他时候要减
 * 
 */
var longestPalindrome = function(s) {
    let str={};
    let num=0;
    for(var i in s){
        str[s[i]]=str[s[i]]?str[s[i]]+1:1;
    }

    let odd=-1;
    for(var i in str){
        num+=str[i];
        odd=str[i]%2===0?odd:odd+1;
    }

    return num - (odd > 0 ? odd : 0)
};

console.log(longestPalindrome("ccc"));
