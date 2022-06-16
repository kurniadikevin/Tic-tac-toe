
let board=[];

// input data for array board
function onClick(val,input){
       board[val-1]= input;
       console.log(board);
       gameResult(0,1,2,'X','Player1 Win');
       gameResult(3,4,5,'X','Player1 Win');
       gameResult(6,7,8,'X','Player1 Win');
  
       gameResult(0,3,6,'X','Player1 Win');
       gameResult(1,4,7,'X','Player1 Win');
       gameResult(2,5,8,'X','Player1 Win');
  
       gameResult(0,4,8,'X','Player1 Win');
       gameResult(2,4,6,'X','Player1 Win');

       gameResult(0,1,2,'O','Player2 Win');
       gameResult(3,4,5,'O','Player2 Win');
       gameResult(6,7,8,'O','Player2 Win');
  
       gameResult(0,3,6,'O','Player2 Win');
       gameResult(1,4,7,'O','Player2 Win');
       gameResult(2,5,8,'O','Player2 Win');
  
       gameResult(0,4,8,'O','Player2 Win');
       gameResult(2,4,6,'O','Player2 Win');
       
    }
   
// count game move    \
let gameMove = 0;
function move(){
    
    return function(){
        gameMove++;
        console.log('Move: '+gameMove);
}}    
const doMove = move();



// event for every grid
const makeFunction = function(num){
    const grid1 = document.querySelector(`.grid${num}`);
    grid1.addEventListener('click',function(){
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
        } 
        else{
            this.textContent='X';
            onClick(num,'X');
        }
            
    },{once:true});
}
for(let i=0; i<9; i++){
    makeFunction(i+1);}

   console.log(board[0]);
   const winDec = document.createElement('div');

gameResult = function(a,b,c,cont,winner){
    if(board[a] === board[b] && board[b]=== board[c] && board[a] === cont){
        console.log(winner);
        //const winDec = document.createElement('div');
        winDec.textContent = winner;
        const dec = document.querySelector('.declaration');
        dec.appendChild(winDec);
        
    }; 

}

console.log(winDec.textContent);

//function to restart (undone)
const restart = function() {
const playAgain = document.createElement('button');
playAgain.textContent = 'Play Again';
winDec.appendChild(playAgain);
playAgain.addEventListener('click',function(){
refreshGame();
},{once:true})

const refreshGame = function(){
    for (let j=1; j< 10; j++){
        const grid1 = document.querySelector(`.grid${j}`);
        grid1.textContent= '';
}   board = [];
    gameMove = 0;

}
}

// make game result only declared once 
// make refresh game function
