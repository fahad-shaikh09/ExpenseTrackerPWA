import React, {useContext} from 'react'
import "../App.css";
import {GlobalContext} from "../../src/GlobalContext"


const ExpenseTotal = () => {

  let [transactions,setTransactions] = useContext(GlobalContext);

  let totalExpense = 0;

  totalExpense = transactions.filter(transaction => transaction.amount < 0 )
  // console.log("Total Expense: " + totalExpense)
  let newTotal = totalExpense.map(x => x.amount )
  // console.log(newTotal)
  let grandTotalExpense = newTotal.reduce( (a,b) => {
    return a+b}
  )


  return (
    <div className={"ExpenseTotal"} style={{ width: '38%' }}>  
      
      <h3>TOTAL EXPENSE:  </h3>
      <h3> {grandTotalExpense} </h3> 
    </div>
  )
}

export default ExpenseTotal
