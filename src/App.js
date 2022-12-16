
import Navbar from "./componentes/Nav/Nav.js";
import ItemDetailsContainer from "./componentes/ItemDetailsContainer/ItemDetailsContainer.js";
import ItemListContainer from "./componentes/ItemsListContainer/ItemsListContainer.js";
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Form from "./componentes/Form/Form.js";
import Carrito from "./componentes/carrito/Carrito.js";
import CartContextProvider from "./contexto/CartContext.js";





function App()
{
  return (
   <BrowserRouter>
    <CartContextProvider>
   <Navbar />

   <Routes>
    <Route path="/" element={<ItemListContainer />}/>

    <Route path="/categoria/:categoriaNombre" element={<ItemListContainer />} />
    
    <Route path="/checkout" element={<Form />} />

    <Route path="/categoria" element={<ItemListContainer />}/>

    <Route path="/itemDetail/:id" element={ <ItemDetailsContainer /> } />

    <Route path="/cart" element={ <Carrito /> } />

    <Route path="*" element={ <h2>Lo siento esta url no existe</h2> } />
    
</Routes>
</CartContextProvider>
</BrowserRouter>
  );
}

export default App;
