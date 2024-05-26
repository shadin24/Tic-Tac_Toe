import Player from "./Components/Player";

function App() {
  return (
    <main>
      <div id="game-container">
        <ol id="palyers">
         <Player initialName="player 1" symbol="X"/>
         <Player initialName="player 2" symbol="O" />
        </ol>
        GAME BOARD
      </div>
    </main>
  );
}

export default App;
