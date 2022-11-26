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
  const [kickInput, setKickInput] = React.useState('')
  const [disabledIn, setDisabled] = React.useState(true)

  function moves(letters) {

    if (clicked.filter(s => letters[letters.length - 1] === s).length > 0) {
      if (clicked.every(c => letters.includes(c))) {
        setWinOrLose('win')
        setBlockButton('letterAlreadySelected')
      }

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

  function savetext(event) {
    const kickWord = (event.target.value)
    setKickInput(kickWord)
  }

  function kickWinOrLose() {

    if (kickInput == clicked.join('')) {
      setWinOrLose('win')
      setSel(clicked)
      setBlockButton('letterAlreadySelected')
      setKickInput('')
      setDisabled(true)
    }
    else {
      setBlockButton('letterAlreadySelected')
      setSel(clicked)
      setWinOrLose('lose')
      setKickInput('')
      setDisabled(true)
      setErrorCounter(6)
    }
  }

  return (
    <div className="App">
      <>
        <Game sel={sel} setsel={setSel} setBlock={setBlockButton} clicked={clicked} setClicked={setClicked}
          errorCounter={errorCounter} setErrorCounter={setErrorCounter} winOrLose={winOrLose} setWinOrLose={setWinOrLose}
          setDisabled={setDisabled} />

        <div class="keyboard">
          <Letters sel={sel} block={blockButton} setSel={setSel} moves={moves} />
        </div>

        <Kick savetext={savetext} kickWinOrLose={kickWinOrLose} kickInput={kickInput} disabledIn={disabledIn} />
      </>
    </div>
  );

}
