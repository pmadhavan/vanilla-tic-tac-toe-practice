import './style.css';

const GRID = Array(9).fill(null);
const WINNER =[
    [0,1,2],[3,4,5],[6,7,8],[2,4,6],[0,4,8],[0,3,6],[1,4,7],[2,5,8]
]
const  createElementWithClass = (type: string, className?: string, text?:string) => {
    const element = document.createElement(type);
    element.className = className || '';
    element.textContent = text || '';
    return element;
  }

  const parentEle = createElementWithClass('div', 'parent');
  const titleEle = createElementWithClass('h1', undefined,'Tic Tac Toe Game Board');
  let currPlayer = 'X'
  let gameState = GRID;
  let isGameOver = false;
  document.body.appendChild(titleEle);
  document.body.appendChild(parentEle);

  GRID.forEach((item, index) => {
    const childCell = createElementWithClass('div', 'child');
    childCell.tabIndex =0;
    childCell.role='button'; 
    childCell.id= index.toString();       
    parentEle.appendChild(childCell);
  });

  ['click', 'keypress'].forEach((eventType) => {
    parentEle.addEventListener(eventType, ( e:{target: HTMLDivElement})=>{
        const target = e.target;
        const cellValue= target.textContent;
        const id = parseInt(target.id);
        if(cellValue){
            return;
        }

        target.textContent = currPlayer;
        gameState[id] = currPlayer;
        let nextPlayer = currPlayer === 'X' ? '0' : 'X';
        currPlayer = nextPlayer;
        isGameOver = checkFullBoard(gameState);
        const winner= checkWinner();

        const gameOverEle = createElementWithClass('h3','gameOver', 'Game Over!');
        const winnerEle = createElementWithClass('h3','winner', `Palyer ${winner} Wins!!`);
        winner? document.body.appendChild(winnerEle): isGameOver && document.body.appendChild(gameOverEle);

        })
  })
  
  const checkFullBoard = (gameState:string[])=>{
    return  gameState.some((item) => !item) ? false: true;
  }
 
  const checkWinner = () => {
    let winner ='';
    WINNER.some((combo) => {
        if(gameState[combo[0]] == gameState[combo[1]] && gameState[combo[1]] == gameState[combo[2]]){
            winner = gameState[combo[0]];
            return true;
        }
        return false;
    });
    return winner;
  }


