import React, { createContext, useReducer } from "react";
import { transReducer } from "./transReducer";
const initTransactions = [
    // {amount: 1500, desc: 'Salary'},
    // {amount: 800, desc: 'Cash'}
]
export const transContext = createContext(initTransactions);
export const TransProvider = ({children}) => {
    let [state, dispatch] = useReducer(transReducer, initTransactions)
    function deleteTransaction(id) {
        dispatch({
          type: 'DELETE',
          payload: id
        });
        // console.log(id)
      }
    function addTransaction(transObj){
        dispatch ({
            type: 'ADD',
            payload: {
                id: Math.floor(Math.random() * 10000),
                amount: transObj.amount, 
                desc: transObj.desc
            }
        })
    }
    return(
        <transContext.Provider value = {{
            transactions: state,
            addTransaction,
            deleteTransaction
        }}>
            {children}
        </transContext.Provider>
    )
}
