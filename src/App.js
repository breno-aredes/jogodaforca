import Kick from "./Chute";
import Game from "./Jogo";
import Letters from "./Letras";
import React from "react";


export default function App() {
  const [sel, setSel] = React.useState([])

  return (
    <div className="App">
      <>
        <Game sel={sel} setsel={setSel} />
        <div class="keyboard">
          <Letters sel={sel} setsel={setSel} />
        </div>
        <Kick />
      </>
    </div>
  );
}