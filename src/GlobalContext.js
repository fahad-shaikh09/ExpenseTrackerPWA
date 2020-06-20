import React, { createContext, useReducer,useState } from "react";
import MyReducer from "./Reducer";



export const GlobalContext = createContext();


export const MyProvider = ( props ) => {

  const [transactions,setTransactions] = useState([
    {text: "Salary1", amount: 800},
    {text: "Salary2", amount: 2000},
    {text: "Book 1", amount: -900},
    {text: "Book 2", amount: -1000},
  ])

  const [state,dispatch] = useReducer(MyReducer, transactions);
  function addIncome(obj){

    dispatch({        
        type: "ADD",
        payload: {
          text: obj.text,
          amount: obj.amount,
        },
      }
    )
  }
    return (
      <GlobalContext.Provider value={
          
        [transactions,setTransactions]
          }
      > 
          {props.children}
      </GlobalContext.Provider>
    );
}