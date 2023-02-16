import { useState } from "react";
import "./App.css";
import AddPun from "./components/AddPun/AddPun";
import PunsList from "./components/PunsList/PunsList";
import Rankings from "./components/Rankings/Rankings";
import TabNavigation from "./components/TabNavigation/TabNavigation";
import { puns } from "./entries/puns";
import { devs } from "./entries/devs";

function App() {
  const [activeTab, setActiveTab] = useState("punsList");
  
  const renderTab = (tabId) => {
    setActiveTab(tabId);
  };

  return (
    <div className="App">
      <h1>Trocadilho Awards</h1>
      <TabNavigation renderTab={renderTab} />
      {activeTab === "punsList" && <PunsList puns={puns} />}
      {activeTab === "addPuns" && <AddPun />}
      {activeTab === "rankings" && <Rankings puns={puns} devs={devs} />}
    </div>
  );
}

export default App;
