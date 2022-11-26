//(conjunto de botões com as letras)
import React from "react";

export default function Letters(props) {

    const { sel, block, setSel, moves } = props;


    const alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]

    function clickedLetter(l) {
        const letters = [...sel, l]
        setSel(letters)
        moves(letters)
    }

    return (
        <>
            {alphabet.map((l) =>
                <button data-test="letter" onClick={() => clickedLetter(l)}
                    className={`chooseLetter ${block} ${sel.includes(l) ? "letterAlreadySelected" : ""} `}
                    disabled={sel.includes(l) || block == "letterAlreadySelected"}
                >{l}</button >
            )}
        </>
    )

}