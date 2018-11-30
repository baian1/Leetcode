const IntMax=Math.pow(2,31)-1;
const IntMin=Math.pow(-2,31);

var reverse = function(x) {
    var rev=0;
    var pop=0;
    while (x!==0){
        pop=x%10;
        x=parseInt(x/10);
        if(rev>IntMax/10 || (rev===IntMax/10 && pop > 7 )){
            return 0;
        }
        if(rev<IntMin/10 || (rev===IntMin/10 && pop< -8)){
            return 0;
        }
        rev = rev*10 + pop;
    }
    return rev;
};

console.log(reverse(-2147483412));
