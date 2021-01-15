import './App.css';
import { Header } from './components/Header.js';
import { Balance } from './components/Balance.js';
import { IncomeExpense} from './components/IncomeExpense.js'
import { TransactionList } from './components/TransactionList.js'; 
import { AddTransaction } from './components/AddTransaction';

import {GlobalProvider} from './context/GlobalState'

function App() {
  return (
    <GlobalProvider>
      <Header />
      <div className="container">

        <div className="left">
          <Balance />
          <IncomeExpense />
          <AddTransaction />
        </div>

        <div className="right">
          <TransactionList /> 
        </div>

      </div>
    </GlobalProvider>
  );
}

export default App;
