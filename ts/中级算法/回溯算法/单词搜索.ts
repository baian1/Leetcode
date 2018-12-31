const board:(string|null)[][]=[
  ['a'],
]

const word="ab";
/**
 * 
 * @param board 
 * @param word 
 * 1.优化为直接返回布尔值，减少判断
 * 2.优化语句加快运行速度
 * 
 * 遇到的问题：
 * 1.去支做的不好，会导致时间超限，关键在于找到正确的后就结束寻找
 * 比如
 * if(!state){getStr(hang+1,lie,wordIndex+1);}
 * if(!state){getStr(hang-1,lie,wordIndex+1);}
 * if(!state){getStr(hang,lie+1,wordIndex+1);}
 * if(!state){getStr(hang,lie-1,wordIndex+1);}
 * 相较于
 * getStr(hang+1,lie,wordIndex+1);
 * getStr(hang-1,lie,wordIndex+1);
 * getStr(hang,lie-1,wordIndex+1);
 * getStr(hang,lie+1,wordIndex+1);
 * 
 * 会有极大的提升，会在寻找到正确选项后一直回溯到开头，不会再往下
 * 没有判断的在获取正确答案后，还会往下继续寻找其他答案，遍历完所有答案，这是没有必要的
 * 
 * 优化问题
 * fangxiang.forEach(([a,b])=>{
 *   if(!state){
 *     getStr(hang+a,lie+b,wordIndex+1);
 *   }
 * });
 * 这样的语句会比
 * if(!state){getStr(hang+1,lie,wordIndex+1);}
 * if(!state){getStr(hang-1,lie,wordIndex+1);}
 * if(!state){getStr(hang,lie+1,wordIndex+1);}
 * if(!state){getStr(hang,lie-1,wordIndex+1);}
 * 直接四连慢，猜测原因是步骤较多，还需要查询数组，解构
 */
const exist = function(board:(string|null)[][], word:string) {
  let fangxiang=[[0,1],[0,-1],[1,0],[-1,0]];

  const maxHang=board.length;
  const maxLie=board[0].length;
  const find=function(hang:number,lie:number,wordIndex:number):boolean {
    if(hang<0 || hang===maxHang || lie<0 || lie===maxLie || board[hang][lie]!==word[wordIndex]){
      return false;
    }

    board[hang][lie]=null;

    if(wordIndex===word.length-1){
      return true;
    }

    let res:boolean=find(hang+1,lie,wordIndex+1)||
    find(hang-1,lie,wordIndex+1)||
    find(hang,lie+1,wordIndex+1)||
    find(hang,lie-1,wordIndex+1);

    board[hang][lie]=word[wordIndex];
    return res;
  }

  for(let i=0;i<board.length;i++){
    for(let j=0;j<board[0].length;j++){
      if(find(i,j,0)){
        return true;
      }
    }
  }

  return false;
};

exist(board,word);