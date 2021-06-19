// eslint-disable-next-line 
export default (state, action) => {
    switch (action.type) {
        case "ADD_INCOME":
            return {
                ...state, //sincome transactions will be updated only not entire state
                incomeTransactions: [action.payload, ...state.incomeTransactions] //action.payload update newly added income, spread out rest of income transactions
            };
        case "ADD_EXPENSE":
            return {
                ...state,
                expenseTransactions: [action.payload, ...state.expenseTransactions]
            };
        case "DELETE_TRANSACTION":
            return {
                ...state,
                incomeTransactions: state.incomeTransactions.filter(
                    incomeTransaction => incomeTransaction.id !== action.payload //if id of the transaction doesnt match the id of the payload then the id should be kept in the array
                ),
                expenseTransactions: state.expenseTransactions.filter(
                    expenseTransaction => expenseTransaction.id !== action.payload
                )
            };

        default:
            return state;
    }
};