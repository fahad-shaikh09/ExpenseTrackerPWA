import React, { useState, useContext } from 'react';
// import MyReducer from "./../Reducer";
import {GlobalContext} from "./../GlobalContext"

const AddIncome = () => {
  const [text, setText] = useState("");
  const [amount, setAmount] = useState(0);

  let {transactions} = useContext(GlobalContext);
  console.log("transactions in AddIncome >>>>>>>>: ", transactions)
  
  const { addIncome } = useContext(GlobalContext);
  // const [state, dispatch] = useReducer(MyReducer, initialState)

  let submitForm = (e) => {
    e.preventDefault();
    console.log("submitForm is running");
    addIncome({text:text, amount:parseInt(amount) })
  }

  return (
    <div className={"addIncome"}>
      <h2> ADD INCOME</h2>
      <form  >
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
        <button onClick={(e) => submitForm(e)}>ADD INCOME </button>

      </form>

    </div>
  )
}

export default AddIncome
