//(input e botão de chute)

export default function Kick(props) {

    const { savetext, kickWinOrLose, kickInput, disabledIn } = props;

    return (
        <div class="iKnow">
            <h1>Já sei a palavra!</h1>
            <input type="text" onChange={savetext} value={kickInput} disabled={disabledIn} />
            <button class="kick" onClick={kickWinOrLose} disabled={disabledIn} >Chutar</button>
        </div>
    )
}