//(input e botão de chute)

export default function Kick(props) {

    const { savetext, kickWinOrLose, kickInput, disabledIn } = props;

    return (
        <div className="iKnow">
            <h1>Já sei a palavra!</h1>
            <input type="text" onChange={savetext} value={kickInput} disabled={disabledIn} data-test="guess-input" />
            <button className="kick" onClick={kickWinOrLose} disabled={disabledIn} data-test="guess-button">Chutar</button>
        </div>
    )
}