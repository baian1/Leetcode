var longestPalindrome = function(s) {
    if(s===''||s.length===1) return s;
    var i = 0;
    var str = s[0];
    while(i<s.length){
        if(s[i+1] !== s[i]){
            var left = i-1;
            var right = i+1;
            var nowmax = 1;
            while (s[left]===s[right] && s[left]!==undefined){
                nowmax+=2;
                left--;
                right++;
            }
            str=str.length>nowmax?str:s.slice(left+1,right);
            if(nowmax===1) {
                i=right;
                continue;
            }
            i=right-1;
        }
        else {
            if(s[i+1]===s[i-1] && s[i-1]!==s[i+2]){
                var left = i-1;
                var right = i+1;
                var nowmax = 1;
                while (s[left]===s[right] && s[left]!==undefined){
                    nowmax+=2;
                    left--;
                    right++;
                }
                str=str.length>nowmax?str:s.slice(left+1,right);
                if(nowmax===1) {
                    i=right;
                    continue;
                }
                i=right-1;
            }
            else {
                var left = i - 1;
                var right = i + 2;
                var nowmax = 2;
                while (s[left] === s[right] && s[left] !== undefined) {
                    nowmax += 2;
                    left--;
                    right++;
                }
                str = str.length > nowmax ? str : s.slice(left + 1, right);
                i = right-1;
            }
        }
    }
    return str;
};

var a=longestPalindrome("aaaaadddcaaaaaaaaaaaaaaaaaaddddaaadddaaa");
console.log(a);
