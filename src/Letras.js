//(conjunto de botões com as letras)
import React from "react";

export default function Letters() {

    return (
        <div class="keyboard">
            <Alphabet />
        </div>
    )
}

function Alphabet() {
    const [selected, setSelected] = React.useState([])
    const alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]

    return (
        <>
            {alphabet.map((props) =>
                <button onClick={() => clicked(props)}
                    className={`chooseLetter ${selected.includes(props) ? "letterAlreadySelected" : ""} `}
                    disabled={selected.includes(props)}
                >{props}</button >
            )}
        </>
    )

    function clicked(l) {
        setSelected([...selected, l])
    }
}
