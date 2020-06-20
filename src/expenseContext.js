import React, { createContext, useReducer } from "react";
import myReducer from "../src/Reducer"


  const expenseState = [
    {text: "Book 1", amount: -900},
    {text: "Book 2", amount: -1000  },
  ]

  export const expenseContext = createContext(expenseState);


  export const MyProvider = ( {children} ) => {

  let [state, dispatch] = useReducer(myReducer,expenseState)


  function addExpense(obj){

    dispatch({        
        type: "DELETE",
        payload: {
          text: obj.text,
          amount: obj.amount,
        },
      }
    )
  }
    return (
      <expenseContext.Provider value={
          {transactions: state,
            addExpense: addExpense
          }

        }  > 
        {children}
    </expenseContext.Provider>
  )
}
