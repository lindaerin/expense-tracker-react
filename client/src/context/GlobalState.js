import React, {createContext, useReducer} from 'react';
import AppReducer from './AppReducer';

// Intial State
const initalState = {
    transactions: [
        {id: 1, text: 'Keyboard', amount: -20},
        {id: 2, text: 'Salary', amount: 300},
        {id: 3, text: 'Camera', amount: -100},
        {id: 4, text: 'Book', amount: -15},
        {id: 5, text: 'Phone', amount: +180},
        {id: 6, text: 'Coffee', amount: -5}
    ]
}

// Create context
export const GlobalContext = createContext(initalState);


// Provider component
export const GlobalProvider = ({children}) => {
    const [state, dispatch] = useReducer(AppReducer, initalState);

    // Actions
    function deleteTransaction(id){
        dispatch({
            type: 'DELETE_TRANSACTION',
            payload: id
        });
    }

    function addTransaction(id){
        dispatch({
            type: 'ADD_TRANSACTION',
            payload: id
        });
    }

    return (<GlobalContext.Provider value = {{
        transactions: state.transactions,
        deleteTransaction,
        addTransaction
    }}>
        {children}
    </GlobalContext.Provider>);

}