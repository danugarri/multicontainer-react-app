import React, { useState } from 'react';
import './App.css';
import { getItems } from './service/getItems';

const App = () => {
  const [items, setItems] = useState(0);
  const displayItems = () => {
    getItems()
    .then(response => response.json())
    .then(data => setItems(data));
  };

  return (
    <React.Fragment>
     <h1>Hay: {items} elementos en la base de datos de Redis</h1><hr/>
      <button onClick= {displayItems}>Añadir</button>
    </React.Fragment>
  );
};

export default App;
