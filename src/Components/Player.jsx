import { useState } from "react";
export default function Player({ name, symbol }) {
  const [isEdited, setisEdited] = useState(false);
  function update() {
    setisEdited(isEdited=>!isEdited);
  }
  let playerName = <span className="player-name">{name}</span>;
  let btnCaption='Edit'
  if(isEdited) {

    playerName=<input type="text" defaultValue={name} required/>
    btnCaption='Save'
  }
  return (
    <li>
      <span className="palyer">
        {playerName}
        <span className="player-symbol">{symbol}</span>
      </span>
      <button onClick={update} >{btnCaption}</button>
    </li>
  );
}
