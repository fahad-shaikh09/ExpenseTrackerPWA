import React, { createContext, useReducer } from "react";
import MyReducer from "./Reducer";

const initialState = {
  transactions: [
    { text: "Salary", amount: 500 },
    { text: "Bill", amount: -100 }
  ]
}


export const GlobalContext = createContext(initialState);


export const MyProvider = ( props ) => {

  const [state, dispatch] = useReducer(MyReducer, initialState)
  
  
  function addIncome(transaction) {
    dispatch({
      type: 'ADD_INCOME',
      payload: transaction
    });
  }

  function addExpense(transaction) {
    dispatch({
      type: 'ADD_EXPENSE',
      payload: transaction
    });
  }
    return (
      <GlobalContext.Provider value={
         {transactions: state.transactions,
          addIncome,
          addExpense}
          }
      > 
          {props.children}
      </GlobalContext.Provider>
    );
}