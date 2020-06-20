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
import { MyProvider } from '../src/incomeContext';


function App() {
  return (
    <MyProvider>
      
        <h1>Expense Tracker App by Fahad Shaikh</h1>
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
        < hr />
        <div className={"ShowEI"}>
          <ShowIncome />
          <ShowExpense />  
        </div>

        {/* <ShowTransaction /> */}
    </MyProvider>
  );
}

export default App;
