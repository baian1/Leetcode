/**
 * Definition for an interval.
 * function Interval(start, end) {
 *     this.start = start;
 *     this.end = end;
 * }
 */
class Interval{
  start:number;
  end:number;
  constructor(start:number,end:number){
    this.start=start;
    this.end=end;
  }
}

const initIntervals=function(nums:number[][]):Interval[]{
  let res:Interval[]=[];
  for(let i=0;i<nums.length;i++){
    res.push(new Interval(nums[i][0],nums[i][1]));
  }
  return res;
}

const intervals=initIntervals([[1,4],[0,4]]);

/**
 * @param {Interval[]} intervals
 * @return {Interval[]}
 * 1.首先对区间按开始部分进行排序
 * 2.比较区间，相交就合并，不相交就提交
 */
var merge = function(intervals:Interval[]):Interval[] {
  if(intervals[0]===undefined){
    return [];
  }

  intervals.sort((a,b)=>a.start-b.start);//对其排序

  let current:Interval=intervals[0];
  let res:Interval[]=[];
  for(let i=1;i<intervals.length;i++){
    if(intervals[i].start<=current.end){
      if(intervals[i].end<current.end){
        continue;
      }
      current.end=intervals[i].end;//相交合并
    }else{
      res.push(current);//不相交，提交
      current=intervals[i];//current为下一个区间
    }
  }
  res.push(current);
  return res;
};

merge(intervals);