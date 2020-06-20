import React, { useContext } from 'react'
// import { expenseContext } from "../expenseContext";

const ShowExpense = () => {

  // let transactions = useContext(expenseContext);
  const transactions = [
    {text: "Book 1", amount: -900},
    {text: "Book 2", amount: -1000  },
  ]

  return (
    <div >
      <h3 className={"ShowExpense"}>SHOW EXPENSE:</h3>

      <ul className={"IncomeUL"}>
            {transactions.map(transaction => <li className={"transactions"}>  
            <span> {transaction.text}  </span> 
            <span>{transaction.amount} </span> 
            </li>)}
      </ul>
    </div>
  )
}

export default ShowExpense
