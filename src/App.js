import "./App.css";
import PunsList from "./components/PunsList/PunsList";
import { puns } from "./entries/puns";

function App() {
  return (
    <div className="App">
      <h1>Trocadilho Awards</h1>
      <PunsList puns={puns} />
    </div>
  );
}

export default App;
