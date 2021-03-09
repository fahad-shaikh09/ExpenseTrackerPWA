import React, { useContext } from 'react'
import { GlobalContext } from "../GlobalContext";  

const ShowIncome = () => {

let {transactions} = useContext(GlobalContext);

// let [transactions,setTransactions] = useContext(GlobalContext);


let incomeTransactions = transactions.filter(transaction => transaction.amount > 0 )
// console.log("incomeTransactions in ShowIncome >>>>>>>>>>>> : ", incomeTransactions)
 

return (
  
      <div >
       
        <h3 className={"ShowIncome"} >SHOW INCOME:</h3>
        <ul className={"IncomeUL"}>
            {incomeTransactions.map((item, ind) => 
            
            (<li className={"transactions"} key={ind} >  
            
            <span> {item.text}   </span>
            <span> {item.amount} </span>
            
            </li>))}
        </ul>
    </div> 
  )
}

export default ShowIncome
