
let board=[];

// count game move    \
let gameMove = 0;
function move(){
    
    return function(){
        gameMove++;
        console.log('Move: '+gameMove);
}}    
const doMove = move();


// for game result
 function gameResult(a,b,c,cont,winner){
    if(board[a] === board[b] && board[b]=== board[c] && board[a] === cont){
     
        console.log(winner);
        //const winDec = document.createElement('div');
        winDec.textContent = winner;
        const dec = document.querySelector('.declaration');
        dec.appendChild(winDec);
        }; 
}
// input data for array board
function onClick(val,input){
    //let player1 = document.querySelector('#player1').value;
    //let player2 = document.querySelector('#player2').value;
       board[val-1]= input;
       console.log(board);
       gameResult(0,1,2,'X', player1 + ' Win!');
       gameResult(3,4,5,'X', player1 + ' Win!');
       gameResult(6,7,8,'X', player1 + ' Win!');
  
       gameResult(0,3,6,'X', player1 + ' Win!');
       gameResult(1,4,7,'X', player1 + ' Win!');
       gameResult(2,5,8,'X', player1 + ' Win!');
  
       gameResult(0,4,8,'X', player1 + ' Win!');
       gameResult(2,4,6,'X', player1 + ' Win!');

       gameResult(0,1,2,'O', player2 + ' Win!');
       gameResult(3,4,5,'O', player2 + ' Win!');
       gameResult(6,7,8,'O', player2 + ' Win!');
  
       gameResult(0,3,6,'O',player2 + ' Win!');
       gameResult(1,4,7,'O',player2 + ' Win!');
       gameResult(2,5,8,'O',player2 + ' Win!');
  
       gameResult(0,4,8,'O',player2 + ' Win!');
       gameResult(2,4,6,'O',player2 + ' Win!');
       }
   


// event for every grid
const makeFunction = function(num){
    const gridNew = document.createElement('div');
    gridNew.classList.add(`.grid${num}`);
    let container = document.querySelector('.container');
    container.appendChild(gridNew);

    gridNew.addEventListener('click',function(){
        doMove();
        if ( gameMove % 2 === 0){
            this.textContent='O';
            onClick(num,'O');
        } else if(gameMove === 9 && winDec.textContent == '' ){
            console.log('Draw Game!');
            this.textContent='X';
            onClick(num,'X');
            if( winDec.textContent == '' ){
                const winDec = document.createElement('div');
                winDec.textContent = 'Draw Game!';
                const dec = document.querySelector('.declaration');
                dec.appendChild(winDec);
            }
        }else{
            this.textContent='X';
            onClick(num,'X');
        }},{once:true});
}

let player11;
let player2;

//start game function
const startGame = function(){
      player1 = document.querySelector('#player1').value;
      player2 = document.querySelector('#player2').value;
    for(let i=0; i<9; i++){
        makeFunction(i+1);}
        console.log('clicked');
        let inputName = document.querySelector('.input-name');
        inputName.innerHTML='';
     };
 
// Dom for starting game     
const startButton = document.querySelector('.start-game');
startButton.addEventListener('click',startGame,{once: true});
     console.log(board[0]);
   const winDec = document.createElement('div');
   console.log(winDec.textContent);//test


// reload game
let reload = document.querySelector('.reload');
reload.addEventListener('click',function(){
    location.reload();
    })