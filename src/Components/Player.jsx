import { useState } from "react";
export default function Player({ initialName, symbol }) {

const [Name,setName]=useState(initialName);
function handleChange(event){
  setName(event.target.value);
}


  const [isEdited, setisEdited] = useState(false);
  function update() {
    setisEdited(isEdited=>!isEdited);
  }
  let playerName = <span className="player-name">{Name}</span>;
  let btnCaption='Edit'
  if(isEdited) {

    playerName=<input type="text" defaultValue={Name} required onChange={handleChange}/>
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