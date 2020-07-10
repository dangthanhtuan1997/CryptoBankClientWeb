const initialState = { data: [], template: null };

const transactionReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'SET_TRANSACTIONS':
            return {
                ...state,
                data: action.transactions
            };

        case 'SET_TEMPLATE':
            return {
                ...state,
                template: action.template
            };

        default:
            return state;
    }
};

export default transactionReducer;