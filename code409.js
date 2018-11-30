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
