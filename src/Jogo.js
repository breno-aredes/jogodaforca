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

    const { sel, setsel, setBlock, clicked, setClicked, errorCounter } = props;

    return (
        <>
            <img src={img[errorCounter]} alt="" />
            <button class="chooseWord" onClick={randomWord}>Escolher Palavra</button>
            <div className="randomWord">
                {!clicked ? '' : ''}
                {clicked.map((p) => `${!sel.includes(p) ? "_" : p}${p}`)}
            </div>
        </>
    )

    function randomWord() {
        random = palavras[Math.floor(Math.random() * palavras.length)].split('')
        //random = ['b', 'o', 'i'] 
        //palavra para testes
        setClicked(random)
        setBlock('')
        setsel([])
    }

}

