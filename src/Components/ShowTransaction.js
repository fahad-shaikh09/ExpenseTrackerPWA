import React from 'react'

const ShowTransaction = () => {
    const transactions = [
        {text: "Salary1", amount: 200},
        {text: "Salary2", amount: 300  },
        {text: "Book", amount: -200}, 
          {text: "Fee", amount: -200}
      ]

  return (
    <div>
      <h2>Transaction History</h2>
        <ul>
            {transactions.map(transaction => <li className={"transactions"}>  <span> {transaction.text}</span> <span>{transaction.amount} </span> </li>)}
    
        </ul>

    </div>
  )
}

export default ShowTransaction
