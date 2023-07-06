import Header from "./components/Header"
import "./App.css"
import ItemListContainer from "./components/ItemListContainer";
import Clicker from "./components/Clicker"
import { BrowserRouter, Routes, Route } from "react-router-dom"


function App() {
  return (
    <BrowserRouter> 

        <Header />
        <Clicker />

        <Routers>
          <Route path="/" element={<ItemListContainer mensaje="Hora: 4:20"/>} /> 
        </Routers>

    </BrowserRouter>   
  );
}

export default App
