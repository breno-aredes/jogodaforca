//(conjunto de botões com as letras)
import React from "react";

export default function Letters(props) {

    const { sel, setsel, block, moves } = props;


    const alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]



    return (
        <>
            {alphabet.map((l) =>
                <button onClick={() => clicked(l)}
                    className={`chooseLetter ${block} ${sel.includes(l) ? "letterAlreadySelected" : ""} `}
                    disabled={sel.includes(l) || block == "letterAlreadySelected"}
                >{l}</button >
            )}
        </>
    )

    function clicked(l) {
        setsel([...sel, l])
        moves()
    }
}