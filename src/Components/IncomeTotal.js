import React, { useContext } from 'react'
import "../App.css";
import { GlobalContext } from "../../src/GlobalContext"


const IncomeTotal = () => {

  let {transactions} = useContext(GlobalContext);
  // console.log("transactions in IncomeTotal.js >>>>>>>>>>.:", transactions)


  // transactions.map(transaction => console.log("Transactions from income total: " + transaction.amount)) 
  var totalIncome = transactions.filter(function (item) { return item.amount > 0 })

  // console.log("Total income: " + totalIncome)

  let newTotal = totalIncome.map(x => x.amount)
  // console.log("newTotal >>>>>>>:", newTotal)

  let grandTotalIncome = newTotal.reduce((a, b) => {
    return a + b
  }
  )
  // console.log("grandTotalIncome >>>>>>>>>>>>: ", grandTotalIncome)

  return (
    <div className={"IncomeTotal"} style={{ width: '38%' }}>

      <h3>TOTAL INCOME:  </h3>
      <h3> {grandTotalIncome} </h3>
    </div>
  )
}

export default IncomeTotal
