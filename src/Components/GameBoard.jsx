import { useState } from "react";



const initialGameBoard = [
    [null, null, null],
    [null, null, null],
    [null, null, null],
  ];
  
  export default function GameBoard({onSelectPlayer,activePlayerSymbol}) {

    const [gameBoard,setgameBoard]=useState(initialGameBoard);
    function UpdateBoard(rowIndex, colIndex) {
      setgameBoard((prevGameBoard)=>{
        const newBoard=[...prevGameBoard.map((row)=>[...row])];
        newBoard[rowIndex][colIndex] = activePlayerSymbol;
        return newBoard;

       
      })
      onSelectPlayer();
    }


    
    return (
      <ol id="game-board">
        {gameBoard.map((rw, rowIndex) => (
          <li key={rowIndex}>
            <ol>
              {rw.map((playerSymbol, colIndex) => (
                <li key={colIndex}>
                  <button onClick={()=>{UpdateBoard(rowIndex,colIndex)}}>{playerSymbol}</button>
                </li>
              ))}
            </ol>
          </li>
        ))}
      </ol>
    );
  }
  
