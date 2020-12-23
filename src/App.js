import React, {useState, useEffect} from 'react';
import './App.css';

import Navbar from './components/Navbar';
import Menu from './components/Menu';
import Cart from './components/Cart';

import DateContextProvider from './contexts/DateContext';
import FoodContextProvider from './contexts/FoodContext';


function App() {
  return (
    <>
      <DateContextProvider>
        <Navbar />
        <FoodContextProvider>
          <Menu />
          <Cart />
        </FoodContextProvider>
      </DateContextProvider>  
    </>
  );
}

export default App;
