import React, {useContext} from 'react'
import "../App.css";
import {GlobalContext} from "../../src/GlobalContext"


const IncomeTotal = () => {
  
  let [transactions] = useContext(GlobalContext);
  // let [transactions,setTransactions] = useContext(GlobalContext);


  // transactions.map(transaction => console.log("Transactions from income total: " + transaction.amount)) 
  let totalIncome = 0;
  
  totalIncome = transactions.filter(transaction => transaction.amount > 0 )
  // console.log("Total income: " + totalIncome)
  let newTotal = totalIncome.map(x => x.amount )
  // console.log(newTotal)
  let grandTotalIncome = newTotal.reduce( (a,b) => {
    return a+b}
  )

  // console.log("grandTotal is " + grandTotal)
  return (
    <div className={"IncomeTotal"} style={{ width: '38%' }}>  
      
        <h3>TOTAL INCOME:  </h3>
        <h3> {grandTotalIncome} </h3> 
    </div>
  )
}

export default IncomeTotal
