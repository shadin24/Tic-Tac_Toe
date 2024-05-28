import GameBoard from "./Components/GameBoard";
import Player from "./Components/Player";
import { useState } from "react";

function App() {
  const [activePlayer, setactivePlayer] = useState("O");
  function handleSelectSquare() {
    setactivePlayer(changePlayer => changePlayer === "X" ? "O" : "X");
    
  }
  console.log(activePlayer);
  return (
    <main>
      <div id="game-container">
        <ol id="players" className="highlight-player">
          <Player
            initialName="player 1"
            symbol="X"
            isActive={activePlayer === "X"}
          />
          <Player
            initialName="player 2"
            symbol="O"
            isActive={activePlayer === "O"}
          />
        </ol>
        <GameBoard
          onSelectPlayer={handleSelectSquare}
          activePlayerSymbol={activePlayer}
        />
      </div>
    </main>
  );
}
export default App;
