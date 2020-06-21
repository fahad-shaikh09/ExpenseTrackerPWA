import React, { useContext } from 'react'
import { GlobalContext } from "../GlobalContext";

const ShowExpense = () => {

const [transactions,setTransactions] = useContext(GlobalContext);


let expenseTransactions = transactions.filter(transaction => transaction.amount < 0 )
  return (
    <div >
      <h3 className={"ShowExpense"}>SHOW EXPENSE:</h3>

      <ul className={"IncomeUL"}>
            {expenseTransactions.map((transaction, ind) => (<li className={"transactions"} key={ind}>  
            <span> {transaction.text}  </span> 
            <span>{transaction.amount} </span> 
            </li>))}
      </ul>
    </div>
  )
}

export default ShowExpense
