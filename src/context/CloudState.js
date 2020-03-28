import React, { useReducer, createContext } from 'react'
import AppReducer from './AppReducer';

// initial state
const InitialState = {
	transactions: []
}

// Create Context
export const CloudContext = createContext(InitialState);

// Provider Component
export const CloudProvider = ({ children }) => {
	const [state, dispatch] = useReducer(AppReducer, InitialState); 
	
	// Actions
	const deleteTransaction = id => {
		dispatch({
			type: 'DELETE_TRANSACTION',
			payload: id
		});
	}
	
	const addTransaction = transaction => {
		dispatch({
			type: 'ADD_TRANSACTION',
			payload: transaction
		});
	}
	
	return (
		<CloudContext.Provider value={{ 
			transactions: state.transactions,
			deleteTransaction,
			addTransaction,
		}}>
			{ children }
		</CloudContext.Provider>  
	)
}
