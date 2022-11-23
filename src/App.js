import Kick from "./Chute";
import Game from "./Jogo";
import Letters from "./Letras";

export default function App() {
  return (
    <div className="App">
      <>
        <Game />
        <Letters />
        <Kick />
      </>
    </div>
  );
}