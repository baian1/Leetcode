const board:(string|null)[][]=[
  ['a'],
]

const word="ab";
/**
 * 
 * @param board 
 * @param word 
 * 1.优化为直接返回布尔值，减少判断
 */
const exist = function(board:(string|null)[][], word:string) {
  let fangxiang=[[0,1],[0,-1],[1,0],[-1,0]];

  const maxHang=board.length;
  const maxLie=board[0].length;
  const find=function(hang:number,lie:number,wordIndex:number){
    if(hang<0 || hang===maxHang || lie<0 || lie===maxLie || board[hang][lie]!==word[wordIndex]){
      return false;
    }

    board[hang][lie]=null;

    if(wordIndex===word.length-1){
      return true;
    }

    let res=fangxiang.some(([a,b])=>{
      return find(hang+a,lie+b,wordIndex+1);
    });

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