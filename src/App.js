import { useState } from "react";
import "./App.css";
import AddPun from "./components/AddPun/AddPun";
import PunsList from "./components/PunsList/PunsList";
import Rankings from "./components/Rankings/Rankings";
import TabNavigation from "./components/TabNavigation/TabNavigation";
import { puns } from "./entries/puns";
import { devs } from "./entries/devs";

function App() {
  const renderPunsList = () => {
    setPunsListTab(true);
    setAddPunTab(false);
    setRankingsTab(false);
  };

  const renderAddPun = () => {
    setPunsListTab(false);
    setAddPunTab(true);
    setRankingsTab(false);
  };

  const renderRankings = () => {
    setPunsListTab(false);
    setAddPunTab(false);
    setRankingsTab(true);
  };

  const [punsListTab, setPunsListTab] = useState(true);
  const [addPunTab, setAddPunTab] = useState(false);
  const [rankingsTab, setRankingsTab] = useState(false);

  return (
    <div className="App">
      <h1>Trocadilho Awards</h1>
      <TabNavigation
        renderPunsList={renderPunsList}
        renderAddPun={renderAddPun}
        renderRankings={renderRankings}
      />
      {punsListTab && <PunsList puns={puns} />}
      {addPunTab && <AddPun/>}
      {rankingsTab && <Rankings puns={puns} devs={devs} />}
    </div>
  );
}

export default App;
