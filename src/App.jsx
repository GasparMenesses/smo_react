import './App.css';
import { Navbar } from './components/NavBar/NavBar';
import { ItemListContainer } from './components/ItemListContainer/ItemListContainer';
import { ItemDetailContainer } from './components/ItemDetailContainer/ItemDetailContainer';
import { BrowserRouter, Routes, Route } from "react-router-dom"
import { CartProvider } from './context/CartContext';
import { Carrito } from './components/carrito/Carrito';
import { Checkout } from './components/checkout/Checkout';

function App() {
  return (
    <BrowserRouter>

    <CartProvider>
      <Navbar />

      <Routes>
        <Route path="/" element={<ItemListContainer />} />
        <Route path="/categoria/:categoria" element={<ItemListContainer />} />
        <Route path="/item/:id" element={<ItemDetailContainer />} />
        <Route path="/carrito" element={<Carrito />} />
        <Route path="/checkout" element={<Checkout/>} />
        <Route path="*" element={ <div>Página No Encontrada</div> } />
      </Routes>
    </CartProvider>

    </BrowserRouter>
  );
}


export default App;
