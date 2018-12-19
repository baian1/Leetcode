/**
 * 
 * @param nums1 
 * @param m 
 * @param nums2 
 * @param n 
 * 顺序写法，从头开始遍历
 */
const merge1:(nums1:number[],m:number,nums2:number[],n:number)=>void =
function(nums1:number[], m:number, nums2:number[], n:number){
  let i=0;
  let j=0;
  while(j<n && i-j<m){
    if(nums1[i]<=nums2[j]){
      i++;
      continue;
    }
    insert(nums1,i,nums2[j]);
    i++;
    j++;
  }
  if(j<n){
    insert(nums1,i,nums2.slice(j));
  }
}
function insert(number:number[],key:number,value:number|number[]):void{
let i=number.length-1;
let weiyi=typeof value ==='number'?1:value.length;
switch(weiyi){
  case 1:
    for(i;i>key;i--){
      number[i]=number[i-1];
    }
    number[key]=value as number;
    break;
  default :
    let j=0;
    while(j<(<number[]>value).length){
      number[key]=(<number[]>value)[j];
      key++;
      j++;
    }
  }
}

let nums1 = [1,2,3,0,0,0]
let m = 3
let nums2 = [2,5,6]
let n = 3
merge1(nums1,m,nums2,n);