var findRestaurant = function(list1, list2) {
  let sum=null;
  let arr=[];
  let hashMap1={};
  for(let i in list1){
    hashMap1[list1[i]]=parseInt(i);
  }
  let hashMap2={};
  for(let i in list2){
    hashMap2[list2[i]]=parseInt(i);
  }
  for(var i in hashMap1){
    if(typeof hashMap2[i]==='number'){
      let newsum=hashMap2[i]+hashMap1[i];
      if(sum===null || newsum<sum){
        sum=newsum;
        arr=[i]
        continue;
      }
      if(sum===newsum){
        arr.push(i);
      }
      if(sum<newsum){
        continue;
      }
    }
  }
  return arr;
};
let one=["Shogun","Tapioca Express","Burger King","KFC"];
let two=["Piatti","The Grill at Torrey Pines","Hungry Hunter Steakhouse","Shogun"];
console.log(findRestaurant(one,two));

