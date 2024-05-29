export default function GameBoard({ onSelectPlayer, board }) {
  
  // const [gameBoard,setgameBoard]=useState(initialGameBoard);
  // function UpdateBoard(rowIndex, colIndex) {
  //   setgameBoard((prevGameBoard)=>{
  //     const newBoard=[...prevGameBoard.map((row)=>[...row])];
  //     newBoard[rowIndex][colIndex] = activePlayerSymbol;
  //     return newBoard;

  //   })
  //   onSelectPlayer();
  // }

  return (
    <ol id="game-board">
      {board.map((rw, rowIndex) => (
        <li key={rowIndex}>
          <ol>
            {rw.map((playerSymbol, colIndex) => (
              <li key={colIndex}>
                <button onClick={()=>onSelectPlayer(rowIndex,colIndex)} disabled={playerSymbol !=null}>{playerSymbol}</button>
              </li>
            ))}
          </ol>
        </li>
      ))}
    </ol>
  );
}
