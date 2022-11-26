//(input e botão de chute)

export default function Kick(props) {

    const { savetext, kickWinOrLose } = props;

    return (
        <div class="iKnow">
            <h1>Já sei a palavra!</h1>
            <input type="text" onChange={savetext} />
            <button class="kick" onClick={kickWinOrLose} >Chutar</button>
        </div>
    )
}