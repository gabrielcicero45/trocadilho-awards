import { useState } from "react";
import "./App.css";
import AddPun from "./components/AddPun/AddPun";
import PunsList from "./components/PunsList/PunsList";
import Rankings from "./components/Rankings/Rankings";
import TabNavigation from "./components/TabNavigation/TabNavigation";
import { useForm } from "./hooks/useForm";
import { useLocalStorage } from "./hooks/useLocalStorage";

function App() {
  const [activeTab, setActiveTab] = useState("punsList");

  const renderTab = (tabId) => {
    setActiveTab(tabId);
  };

  const initialPun = {
    date: "",
    votes: 0,
    dev: "",
    context: "",
    message: "",
  };

  const {
    value: pun,
    handleInputChange: handlePunChange,
    setValue: setPun,
  } = useForm(initialPun);

  const punsStored = useLocalStorage("puns", []);
  const devsStored = useLocalStorage("devs", []);

  const handleSubmit = (event) => {
    event.preventDefault();
    punsStored.handleSave(pun);

    const devFound = devsStored.value.find((dev) => dev.name === pun.dev);

    if (devFound) {
      devsStored.handleUpdate(devFound.id, { puns: devFound.puns + 1 });
    } else {
      devsStored.handleSave({ id: Date.now(), name: pun.dev, puns: 1 });
    }

    setPun(initialPun);
  };

  return (
    <div className="App">
      <h1>Trocadilho Awards</h1>
      <TabNavigation renderTab={renderTab} />
      {activeTab === "punsList" && <PunsList puns={punsStored} />}
      {activeTab === "addPuns" && (
        <AddPun
          pun={pun}
          handleSubmit={handleSubmit}
          handlePunChange={handlePunChange}
        />
      )}
      {activeTab === "rankings" && (
        <Rankings puns={punsStored.value} devs={devsStored.value} />
      )}
    </div>
  );
}

export default App;
