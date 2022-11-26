// (imagem da forca, botão de iniciar, palavra do jogo)
import palavras from "./palavras";

const img = [
    'img/forca0.png',
    'img/forca1.png',
    'img/forca2.png',
    'img/forca3.png',
    'img/forca4.png',
    'img/forca5.png',
    'img/forca6.png',
]
let random = []

export default function Game(props) {

    const { sel, setsel, setBlock, clicked, setClicked, errorCounter, winOrLose, setWinOrLose, setErrorCounter, setDisabled } = props;

    function randomWord() {
        random = palavras[Math.floor(Math.random() * palavras.length)].split('')
        setClicked(random)
        setBlock('')
        setsel([])
        setWinOrLose('')
        setErrorCounter(0)
        setDisabled(false)
    }

    return (
        <>
            <img src={img[errorCounter]} data-test="game-image" alt="" />
            <button className="chooseWord" onClick={randomWord} data-test="choose-word">Escolher Palavra</button>
            <div className={`randomWord ${winOrLose}`} data-test="word" data-answer={clicked}>
                {!clicked ? '' : ''}
                {clicked.map((p) => `${!sel.includes(p) ? "_" : p}`)}
            </div>
        </>
    )

}

