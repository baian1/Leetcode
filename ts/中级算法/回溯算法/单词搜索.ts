const board:(string|null)[][]=[
  ['a'],
]

const word="ab";

const exist = function(board:(string|null)[][], word:string) {
  let current='';
  let fangxiang=[[0,1],[0,-1],[1,0],[-1,0]];
  let state:boolean=false;

  const maxHang=board.length;
  const maxLie=board[0].length;
  const getStr=function(hang:number,lie:number,wordIndex:number){
    if(hang<0 || hang===maxHang || lie<0 || lie===maxLie || board[hang][lie]!==word[wordIndex]){
<<<<<<< HEAD
      return;
=======
      return false;
>>>>>>> c345c3bba2c51491bc38b7ef702745be8790956c
    }

    board[hang][lie]=null;

    if(wordIndex===word.length-1){
<<<<<<< HEAD
      state=true;
      return;
    }

    fangxiang.forEach(([a,b])=>{
      if(!state){
        getStr(hang+a,lie+b,wordIndex+1);
      }
    });

    board[hang][lie]=word[wordIndex];
  }
  for(let i=0;i<board.length;i++){
    for(let j=0;j<board[0].length;j++){
      getStr(i,j,0);
    }
  }

  return true;
=======
      return true;
    }

    fangxiang.some(([a,b]):boolean=>{
        return getStr(hang+a,lie+b,wordIndex+1);
    });

    board[hang][lie]=word[wordIndex];

    return false;
  }
  for(let i=0;i<board.length;i++){
    for(let j=0;j<board[0].length;j++){
      if(getStr(i,j,0)){
        return true;
      }
    }
  }
  return false;
>>>>>>> c345c3bba2c51491bc38b7ef702745be8790956c
};

exist(board,word);