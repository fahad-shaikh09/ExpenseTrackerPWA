import React, { createContext, useState } from "react";
// import {useReducer} from "react";
// import MyReducer from "./Reducer";

export const GlobalContext = createContext();


export const MyProvider = ( props ) => {

  let [transactions,setTransactions] = useState([
    {text: "Salary1", amount: 800},
    {text: "Salary2", amount: 2000},
    {text: "Book 1", amount: -900},
    {text: "Book 2", amount: -1000},
    {text: "Book 3", amount: -3000},
    {text: "Salary 3", amount: 1000}
  ])

  // transactions.map(transaction => console.log(transaction) )

  // let [state,dispatch] = useReducer(MyReducer, transactions);
  // function addIncome(transObj){
  //     dispatch({        
  //       type: "ADD",
  //       payload: {
  //         text: transObj.text,
  //         amount: transObj.amount,
  //       },
  //     }
  //   )
  // }
    return (
      <GlobalContext.Provider value={
         [transactions,setTransactions]    
          }
      > 
          {props.children}
      </GlobalContext.Provider>
    );
}