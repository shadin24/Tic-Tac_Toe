import GameBoard from "./Components/GameBoard";
import Player from "./Components/Player";
import { useState } from "react";
import Log from "./Components/Log";
import { WINNING_COMBINATIONS } from "./Components/WinningCombinations.js";
import GameOver from "./Components/GameOver.jsx";

const initialGameBoard = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
];

function deriveActivePlayer(gameturns) {
  let currentPlayer = "X";
  if (gameturns.length > 0 && gameturns[0].player === "X") {
    currentPlayer = "O";
  }
  return currentPlayer;
}

function App() {
const [players,setplayers]=useState({
  X:'player 1',
  O:'player 2'
})


  const [gameturns, setGameturns] = useState([]);

  const activePlayer = deriveActivePlayer(gameturns);

  let gameBoard = [...initialGameBoard.map(Array=>[...Array])];

  let winner 

  for (const turn of gameturns) {
    const { square, player } = turn;
    const { row, col } = square;
    gameBoard[row][col] = player;
  }

  for (const combination of WINNING_COMBINATIONS) {
    const firdtSquaresymbol =
      gameBoard[combination[0].row][combination[0].column];
    const secondSquaresymbol =
      gameBoard[combination[1].row][combination[1].column];
    const thirdSquaresymbol =
      gameBoard[combination[2].row][combination[2].column];

    if (
      firdtSquaresymbol &&
      firdtSquaresymbol === secondSquaresymbol &&
      firdtSquaresymbol === thirdSquaresymbol
    ) {

      winner = players[firdtSquaresymbol];
    }
  }

  const hasDraw =gameturns.length === 9 && !winner;

  // const [activePlayer, setactivePlayer] = useState("X");
  function handleSelectSquare(rowIndex, colIndex) {
    // setactivePlayer((changePlayer) => (changePlayer === "X" ? "O" : "X"));
    setGameturns((prevTurn) => {
      const currentPlayer = deriveActivePlayer(prevTurn);

      const updatedTurns = [
        { square: { row: rowIndex, col: colIndex }, player: currentPlayer },
        ...prevTurn,
      ];

      return updatedTurns;
    });
  }
function Rematch(){
  setGameturns([]);
}


function HandlePlayerName(symbol,newName)
{
  setplayers(prevPlayers=>{
    return {
      ...prevPlayers,
      [symbol]:newName
    };

  })
}


  return (
    <main>
      <div id="game-container">
        <ol id="players" className="highlight-player">
          <Player
            initialName="player 1"
            symbol="X"
            isActive={activePlayer === "X"}
            onNameChange={HandlePlayerName}
          />
          <Player
            initialName="player 2"
            symbol="O"
            isActive={activePlayer === "O"}
            onNameChange={HandlePlayerName}
          />
        </ol>
        {(winner || hasDraw) && <GameOver winner={winner} onRestart={Rematch}/> }
        <GameBoard onSelectPlayer={handleSelectSquare} board={gameBoard} />
      </div>
      <Log turns={gameturns} />
    </main>
  );
}

export default App;

