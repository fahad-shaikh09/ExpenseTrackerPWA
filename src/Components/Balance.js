import React, {useContext} from 'react'
import {GlobalContext} from "../../src/GlobalContext"


const Balance = () => {

let {transactions} = useContext(GlobalContext);

// let [transactions,setTransactions] = useContext(GlobalContext);
console.log("transactions in Balance.js >>>>>>>>>>.:", transactions)


///////////////INCOME////////////////////////
// transactions.map(transaction => console.log("Transactions from income total: " + transaction.amount)) 

let totalIncome = transactions.filter(transaction => transaction.amount > 0 )
// console.log("Total income: " + totalIncome)
let newTotalIncome = totalIncome.map(x => x.amount )
// console.log(newTotal)
let grandTotalIncome = newTotalIncome.reduce((a,b) => {
  return a+b}
)
///////////////EXPENSE////////////////////////
let totalExpense  = transactions.filter(transaction => transaction.amount < 0 )
  // console.log("Total Expense: " + totalExpense)
  let newTotalExpense = totalExpense.map(x => x.amount )
  // console.log(newTotal)
  let grandTotalExpense = newTotalExpense.reduce((a,b) => {
    return a+b}
  )

let balance  = grandTotalIncome + grandTotalExpense;

  return (
    <div>
      <h2>Balance: $ {balance}</h2>
    </div>
  )
}

export default Balance