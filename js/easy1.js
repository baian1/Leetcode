var twoSum = function(number, target) {
    var list={};
    for (var i=0;i<number.length;i++){
        if(list[target-number[i]]!==undefined) {
            return [list[target-number[i]], i];
        }
        list[number[i]]=i;
    }
};
a=twoSum([3,2,4],6);
console.log(a);
