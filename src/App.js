import './App.css';
import TrocadilhoList from './components/TrocadilhoList/TrocadilhoList';

function App() {
  const trocadilhos =[{date: "13/02/2023",
  votes: 10,
  dev: "cicero.medeirios",
  context: "Lorem ipsum dolor,sit alit. Fugiat animi quaerat assumenda architecto possimus qui itaque reprehenderit tempore provident debitis? Dicta blanditiis mollitia reiciendis saepe. Alias, facere? Excepturi, officia obcaecati.",
  message: "Lorem ipsus"
  },{date: "13/02/2023",
  votes: 10,
  dev: "cicero.medeirios",
  context: "Lorem ipsum dolor,sit alit. Fugiat animi quaerat assumenda architecto possimus qui itaque reprehenderit tempore provident debitis? Dicta blanditiis mollitia reiciendis saepe. Alias, facere? Excepturi, officia obcaecati.",
  message: "Lorem ipsus"
  },{date: "13/02/2023",
  votes: 10,
  dev: "cicero.medeirios",
  context: "Lorem ipsum dolor,sit alit. Fugiat animi quaerat assumenda architecto possimus qui itaque reprehenderit tempore provident debitis? Dicta blanditiis mollitia reiciendis saepe. Alias, facere? Excepturi, officia obcaecati.",
  message: "Lorem ipsus"
  },{date: "13/02/2023",
  votes: 10,
  dev: "cicero.medeirios",
  context: "Lorem ipsum dolor,sit alit. Fugiat animi quaerat assumenda architecto possimus qui itaque reprehenderit tempore provident debitis? Dicta blanditiis mollitia reiciendis saepe. Alias, facere? Excepturi, officia obcaecati.",
  message: "Lorem ipsus"
  },] 

  return (
    <div className="App">
      <h1>Trocadilho Awards</h1>
      <TrocadilhoList trocadilhos={trocadilhos}/>
    </div>
  );
}

export default App;
