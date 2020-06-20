import React, { useContext } from 'react'
// import { incomeContext } from "../incomeContext";

const ShowIncome = () => {

  // let transactions = useContext(incomeContext);
  const transactions = [
    {text: "Salary1", amount: 800},
    {text: "Salary2", amount: 2000},
  ]

  console.log(transactions)
  return (
  
      <div >
       
        <h3 className={"ShowIncome"} >SHOW INCOME:</h3>
        
        <ul className={"IncomeUL"}>
            {transactions.map((transaction, ind) => <li className={"transactions"} key={ind} >  
              <span> {transaction.text}   </span> 
              <span> {transaction.amount} </span> 
            </li>)}
        </ul>



    </div>
      
    
  )
}

export default ShowIncome
