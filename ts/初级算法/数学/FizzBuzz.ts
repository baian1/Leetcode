interface List {
  3:string;
  5:string;
  15:string;
}

const fizzBuzz = function(n:number){
  let dictionary:List={
    3:"Fizz",
    5:"Buzz",
    15:"FizzBuzz"
  }
  let list:string[]=[];
  let i:number=1;
  for(i;i<=n;i++){
    if(i%15===0){
      list.push(dictionary[15]);
      continue;
    }
    if(i%3===0){
      list.push(dictionary[3]);
      continue;
    }
    if(i%5===0){
      list.push(dictionary[5]);
      continue;
    }
    list.push(String(i));
  }
  return list;
}

console.log(fizzBuzz(423).toString);