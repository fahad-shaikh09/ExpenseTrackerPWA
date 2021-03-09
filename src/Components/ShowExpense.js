import React, { useContext } from 'react'
import { GlobalContext } from "../GlobalContext";

const ShowExpense = () => {

let {transactions} = useContext(GlobalContext);

// const [transactions,setTransactions] = useContext(GlobalContext);


let expenseTransactions = transactions.filter(transaction => transaction.amount < 0 )
// console.log("expenseTransactions in ShowExpense >>>>>>>>>>>> : ", expenseTransactions)
  return (
    <div >
      <h3 className={"ShowExpense"}>SHOW EXPENSE:</h3>

      <ul className={"IncomeUL"}>
            {expenseTransactions.map((item, ind) => (<li className={"transactions"} key={ind}>  
            <span> {item.text}  </span> 
            <span>{item.amount} </span> 
            </li>))}
      </ul>
    </div>
  )
}

export default ShowExpense
