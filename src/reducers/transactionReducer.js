const initialState = { data: null };

const transactionReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'SET_TRANSACTIONS':
            return {
                ...state,
                data: action.transactions
            };

        default:
            return state;
    }
};

export default transactionReducer;