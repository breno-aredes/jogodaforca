// (imagem da forca, botão de iniciar, palavra do jogo)
import palavras from "./palavras";

//pega uma palavra aleatoria e transforma em lista
const randomWord = palavras[Math.floor(Math.random() * palavras.length)].split('')

export default function Game() {


    return (
        <>
            <img src="img/forca0.png" alt="" />
            <button class="chooseWord">Sortear Palavra</button>
            <div className="randomWord">
                {randomWord.map((p) => `${p}`)}
            </div>
        </>
    )
}