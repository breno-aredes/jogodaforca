//(conjunto de botões com as letras)
import React from "react";

export default function Letters(props) {

    const alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]

    return (
        <>
            {alphabet.map((l) =>
                <button onClick={() => clicked(l)}
                    className={`chooseLetter ${props.block} ${props.sel.includes(l) ? "letterAlreadySelected" : ""} `}
                    disabled={props.sel.includes(l) || props.block == "letterAlreadySelected"}
                >{l}</button >
            )}
        </>
    )

    function clicked(l) {
        props.setsel([...props.sel, l])
        alert(props.sel)
    }
}