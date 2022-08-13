import React from 'react';
import './App.css';
import ItemDetailContainer from './Components/Items/ItemDetailContainer';
import ItemListContainer from './Components/Items/ItemListContainer';
import Cart from './Components/Cart/Cart';
import NavBar from './Components/NavBar/NavBar';
import CustomProvider from './Components/Context/CartContext';
import Order from './Components/Order/Order';

import {
  BrowserRouter,
  Routes,
  Route,
} from 'react-router-dom'
import Footer from './Components/Footer/Footer';


const App = () => {
  return (
    <BrowserRouter>
      <CustomProvider>
        <NavBar />
        <Routes>
          <Route path='/' element={<ItemListContainer />} />
          {/* Ruta para categorías */}
          <Route path='/category/:categoryName' element={<ItemListContainer />} />
          {/* Ruta para el detalle de los productos */}
          <Route path='/item/:itemId' element={<ItemDetailContainer />} />
          <Route path='/cart' element={<Cart />} />
          <Route path='/order' element={<Order />} />
        </Routes>
      </CustomProvider>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
