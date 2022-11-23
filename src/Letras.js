//(conjunto de botões com as letras)

export default function Letters() {
    return (
        <div class="keyboard">
            <Alphabet />
        </div>
    )
}

function Alphabet() {
    const alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]

    return (
        <>
            {alphabet.map((props) =>
                <button class="chooseLetter">{props}</button>
            )}
        </>
    )
}
