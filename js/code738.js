var monotoneIncreasingDigits = function(N) {
    let math=N.toString().split('');
    let begin;
    let beginmath;

    for(var i=math.length-1;i>0;i--){
        if(math[i]>=math[i-1]){
            continue;
        }
        else {
            begin=i;
            beginmath=math[i-1];
            math[i-1]--;
        }
    }
    for(var i = begin;i<math.length;i++) {
        math[i] = 9;
    }
    math[begin-1]=beginmath-1;
    return parseInt(math.join(''));
};

console.log(monotoneIncreasingDigits(120));
