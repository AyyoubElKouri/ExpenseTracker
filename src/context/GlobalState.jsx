import {  createContext, useReducer } from "react";
import AppReducer from './AppReducer'

// Initial state
const initialState  = {
    transaction: []
}

// Create context 
export const GlobalContext = createContext(initialState);

// Provider component
export const GlobalProvider = ({ children }) => {
    const [state, dispatch] = useReducer(AppReducer, initialState);

    function deleteTransaction(id){
        dispatch({
            type: 'DELETE_TRANSACTION',
            payload: id
        })
    }

    function AddTransaction(transaction){
        dispatch({
            type: 'ADD_TRANSACTION',
            payload: transaction
        })
    }

    return (
        <GlobalContext.Provider value={{
            transaction: state.transaction,
            deleteTransaction,
            AddTransaction
        }}>
            {children}
        </GlobalContext.Provider>
    );
}