import Header from "./components/Header"
import "./App.css"
import ItemListContainer from "./components/ItemListContainer";
import Clicker from "./components/Clicker"
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom"
import Nosotros from "./components/Nosotros";
import Contacto from "./components/Contacto";
import Error404 from "./components/Error404";
import ItemDetailContainer from "./components/ItemDetailContainer";


function App() {
  return (
    <BrowserRouter> 

        <Header />
        <Clicker />

        <Routers>
          <Route path="/" element={<ItemListContainer mensaje="Hora: 4:20"/>} /> 
          <Route path="/productos/:categoryId" element={<ItemListContainer mensaje="Hora: 4:20"/>} /> 
          <Route path="/detail/:itemId" element={<ItemDetailContainer />}/>
          <Route path="/nosotros" element={<Nosotros/>} />
          <Route path="/contacto" element={<Contacto/>} />
          <Route path="*" element= { <Navigate to={"/"}/>}/>
        </Routers>

    </BrowserRouter>   
  );
}

export default App
