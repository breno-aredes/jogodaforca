// (imagem da forca, botão de iniciar, palavra do jogo)
import palavras from "./palavras";
import { useState } from "react";

const img = [
    'img/forca0.png',
    'img/forca1.png',
    'img/forca2.png',
    'img/forca3.png',
    'img/forca4.png',
    'img/forca5.png',
    'img/forca6.png',
]
let contador = 0

export default function Game(props) {

    const [clicked, setClicked] = useState([])

    return (
        <>
            <img src="img/forca0.png" alt="" />
            <button class="chooseWord" onClick={randomWord}>Escolher Palavra</button>
            <div className="randomWord">
                {!clicked ? '' : ''}
                {clicked.map((p) => `${!props.sel.includes(p) ? "_" : p}${p}`)}
            </div>
        </>
    )

    function randomWord() {
        const random = palavras[Math.floor(Math.random() * palavras.length)].split('')
        setClicked(random)
        console.log(random)
        props.block('')
    }

}

