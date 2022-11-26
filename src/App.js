import Kick from "./Chute";
import Game from "./Jogo";
import Letters from "./Letras";
import React from "react";


export default function App() {
  const [clicked, setClicked] = React.useState([])
  const [sel, setSel] = React.useState([])
  const [blockButton, setBlockButton] = React.useState(['letterAlreadySelected'])
  const [errorCounter, setErrorCounter] = React.useState(0)
  const [winOrLose, setWinOrLose] = React.useState('')

  return (
    <div className="App">
      <>
        <Game sel={sel} setsel={setSel} setBlock={setBlockButton} clicked={clicked} setClicked={setClicked}
          errorCounter={errorCounter} setErrorCounter={setErrorCounter} winOrLose={winOrLose} setWinOrLose={setWinOrLose} />

        <div class="keyboard">
          <Letters sel={sel} setsel={setSel} block={blockButton} moves={moves} />
        </div>

        <Kick />
      </>
    </div>
  );


  function moves() {
    //muda a imagem sempre
    //sel não tem o ultimo elemento clicado

    //if (clicked.filter(s => sel[sel.length].includes(s))) { ??????
    if (clicked.every(c => sel.includes(c))) {
      setWinOrLose('win')
      setBlockButton('letterAlreadySelected')

    }
    else {
      setErrorCounter(errorCounter + 1)

      if (errorCounter + 1 === 6) {
        setBlockButton('letterAlreadySelected')
        setSel(clicked)
        setWinOrLose('lose')

      }
    }
  }
}
