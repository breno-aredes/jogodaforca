// (imagem da forca, botão de iniciar, palavra do jogo)
import palavras from "./palavras";

const randomWord = palavras[Math.floor(Math.random() * palavras.length)]

export default function Game() {

    return (
        <>
            <img src="img/forca0.png" alt="" />
            <button class="chooseWord">Sortear Palavra</button>
            <div className="randomWord">_________</div>
        </>
    )
}