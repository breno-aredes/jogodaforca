import Kick from "./Chute";
import Game from "./Jogo";
import Letters from "./Letras";
import React from "react";

export default function App() {
  const [sel, setSel] = React.useState([])
  const [blockButton, setBlockButton] = React.useState(['letterAlreadySelected'])

  return (
    <div className="App">
      <>
        <Game sel={sel} setsel={setSel} block={setBlockButton} />
        <div class="keyboard">
          <Letters sel={sel} setsel={setSel} block={blockButton} />
        </div>
        <Kick />
      </>
    </div>
  );
}