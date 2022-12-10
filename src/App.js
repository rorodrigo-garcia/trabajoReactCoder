
import Navbar from "./componentes/Nav/Nav.js";
import ItemDetailsContainer from "./componentes/ItemDetailsContainer/ItemDetailsContainer.js";
import ItemListContainer from "./componentes/ItemsListContainer/ItemsListContainer.js";
import { BrowserRouter, Routes, Route } from "react-router-dom"
import { productos } from "./productosMock.js";




function App()
{
  return (
   <BrowserRouter>

   <Navbar />

   <Routes>
    <Route path="/" element={<ItemListContainer />}/>

    <Route path="/categoria/:categoriaNombre" element={<ItemListContainer />} />

    <Route path="/categoria" element={<ItemListContainer />}/>

    <Route path="/itemDetail/:id" element={ <ItemDetailsContainer />  } />

    <Route path="/cart" element={ <h2>Este es mi carrito </h2> } />

    <Route path="*" element={ <h2>Lo siento esta url no existe</h2> } />
    
</Routes>
</BrowserRouter>
  );
}

export default App;
