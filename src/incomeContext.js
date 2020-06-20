import React, { createContext, useReducer } from "react";
import myReducer from "../src/Reducer";

const incomeState = [
    {text: "Salary1", amount: 800},
    {text: "Salary2", amount: 2000},
  ]

 

export const incomeContext = createContext(incomeState);


export const MyProvider = ( {children} ) => {

  const [state,dispatch] = useReducer(myReducer, incomeState);

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
      <incomeContext.Provider value={
          {transactions: state,
            addIncome: addIncome
          }


      }  > 
          {children}
      </incomeContext.Provider>
    )
}