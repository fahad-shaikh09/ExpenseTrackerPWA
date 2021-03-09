import React, { useState, useContext } from 'react';
import {GlobalContext} from "./../GlobalContext"


const AddExpense = () => {
  const [text,setText] = useState("");
  const [amount,setAmount] = useState(0);
  

  let {transactions} = useContext(GlobalContext);
  console.log("transactions in AddExpense >>>>>>>>: ", transactions)

  const { addExpense } = useContext(GlobalContext);

  let submitForm = (e) => {
        e.preventDefault();
        addExpense({text:text, amount: parseInt(amount)})
  }

    return (
    <div className={"addExpense"}>
      <h2 > ADD EXPENSE</h2>

      <form>
        <label>Enter Text</label> <br />
        <input type="text"
                value={text}
                onChange={(e) => setText(e.target.value)}
                placeholder="Enter Description"
                required
        />
       <br />
       <br />
       <label>Enter Amount</label> <br />
        <input type="number"
                value={amount}
                onChange={(e) => e.target.value < 0 ? setAmount(e.target.value) : alert("Enter -ve amount for Expense")}
                placeholder="Enter -ve Amount"
                required
        />
        
        <br />
        <br />
         <button onClick={(e)=> submitForm(e)}> ADD EXPENSE</button>     

      </form>

    </div>
  )
}

export default AddExpense
