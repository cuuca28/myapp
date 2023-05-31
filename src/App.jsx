import Header from "./components/Header"
import "./App.css"
import ItemListContainer from "./components/ItemListContainer";
import Clicker from "./components/Clicker"


function App() {
  return (
    <div>
      <Header />
      <ItemListContainer mensaje="Hora: 4:20"/>
      <Clicker />
    </div>
  );
}

export default App;
