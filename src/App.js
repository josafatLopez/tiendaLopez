import React from 'react';
import './App.css';
import ItemDetailContainer from './Components/Items/ItemDetailContainer';
import ItemListContainer from './Components/Items/ItemListContainer';
import NavBar from './Components/NavBar/NavBar';

const App = () => {
  return (
    <div className="App">
      <NavBar/>
      <ItemListContainer />
      <ItemDetailContainer />
    </div>
  );
}

export default App;
