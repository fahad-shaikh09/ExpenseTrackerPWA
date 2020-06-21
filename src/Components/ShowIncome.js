import React, { useContext } from 'react'
import { GlobalContext } from "../GlobalContext";  

const ShowIncome = () => {

let [transactions,setTransactions] = useContext(GlobalContext);
  // console.log("showincome component " + transactions)
let incomeTransactions = transactions.filter(transaction => transaction.amount > 0 )
  return (
  
      <div >
       
        <h3 className={"ShowIncome"} >SHOW INCOME:</h3>
        <ul className={"IncomeUL"}>
            {incomeTransactions.map((transaction, ind) => 
            
            (<li className={"transactions"} key={ind} >  
            
            <span> {transaction.text}   </span>
            <span> {transaction.amount} </span>
            
            </li>))}
        </ul>
    </div> 
  )
}

export default ShowIncome
