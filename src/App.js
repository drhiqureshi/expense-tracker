import React from 'react';
import './App.css';
import Header from './components/header'
import Balance from './components/balance'
import Addtransaction from './components/addtransaction'
import Incomelist from './components/incomelist'
import Expenselist from './components/expenselist'
import {GlobalContextProvider} from './context/globalstate'



function App() {
  return (
    <GlobalContextProvider>
    <div className="container">
      <div className="app-wrapper">
      <Header/>
      <Balance/>
      <Addtransaction/>
      <Incomelist/>
      <Expenselist/>
      </div>
    </div>
    </GlobalContextProvider>
  );
}

export default App;
