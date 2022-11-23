//(conjunto de botões com as letras)

export default function Letras() {
    return (
        <div class="keyboard">
            <Alfabeto />
        </div>
    )
}

function Alfabeto() {
    const alfabeto = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]

    return (
        <>
            {alfabeto.map((props) =>
                <button class="chooseLetter">{props}</button>
            )}
        </>
    )
}
