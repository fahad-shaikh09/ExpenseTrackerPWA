import React from 'react';
import './App.css';
import Balance from './Components/Balance';
import IncomeTotal from './Components/IncomeTotal';
import ExpenseTotal from "./Components/ExpenseTotal";
import AddIncome from './Components/AddIncome';
// import ShowTransaction from './Components/ShowTransaction';
import AddExpense from './Components/AddExpense';
import ShowIncome from "./Components/ShowIncome";
import ShowExpense from "./Components/ShowExpense";
import { MyProvider } from '../src/GlobalContext';
import {requestPermission} from "./services/firebaseService"

function App() {
  return (
    <MyProvider>
        
        <h1>Expense Tracker App by Fahad Shaikh: CNC006590 </h1>
        <button onClick={requestPermission}>Generate Token for Push Notifications</button>
        <Balance />

        <div className={"IncomeExpenseTotal"}> 
          <IncomeTotal />
          <ExpenseTotal />
        </div>

        <div className={"incomeExpense"}>
          <AddIncome />
          <AddExpense />
        </div>
        <br />
        <hr />
        <div className={"ShowEI"}>
          <ShowIncome />
          <ShowExpense />  
        </div>

        {/* <ShowTransaction /> */}
    </MyProvider>
  );
}

export default App;
