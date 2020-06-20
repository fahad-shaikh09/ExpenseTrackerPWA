import React, { useState } from 'react';


const AddIncome = () => {
  const [text,setText] = useState("");
  const [amount,setAmount] = useState(0);
  
  let submitForm = (e) => {
        e.preventDefault();
  }

    return (
    <div className={"addIncome"}>
      <h2> ADD INCOME</h2>
      <form onSubmit={submitForm} >
        <label>Enter Text</label> <br />
        <input type="text"
                value={text}
                onChange={(e) => setText(e.target.value)}
                placeholder="Enter Description"
        />
       <br />
       <br />
       <label>Enter Amount</label> <br />
        <input type="number"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
                placeholder="Enter Amount"
        />
        
        <br />
        <br />
        <input  type="button" value="ADD INCOME" />

      </form>

    </div>
  )
}

export default AddIncome
