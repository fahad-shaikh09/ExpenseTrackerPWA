import React, { useState } from 'react';


const AddExpense = () => {
  const [text,setText] = useState("");
  const [amount,setAmount] = useState(0);
  
  let submitForm = (e) => {
        e.preventDefault();
  }

    return (
    <div className={"addExpense"}>
      <h2 > ADD EXPENSE</h2>

      <form onSubmit={submitForm} >
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
                onChange={(e) => setAmount(e.target.value)}
                placeholder="Enter Amount"
                required
        />
        
        <br />
        <br />
        <input  type="button" value="ADD EXPENSE" />

      </form>

    </div>
  )
}

export default AddExpense
