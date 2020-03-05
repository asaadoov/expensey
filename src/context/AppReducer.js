export default ( state, { type, payload } ) => {
	switch(type){
		case 'DELETE_TRANSACTION':
			return {
				...state,
				transactions: state.transactions.filter( transaction => transaction.id !== payload /* payload == transaction.id */)
			}
			
		case 'ADD_TRANSACTION':
			return {
				...state,
				transactions: [...state.transactions, payload /* payload == transaction */]
			}
			
		default:
			return state;
	}
} 