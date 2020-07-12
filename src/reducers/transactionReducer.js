const initialState = { data: [], template: null, selectedItem: null };

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

        case 'SELECT_TRANSACTION':
            return {
                ...state,
                selectedItem: action.transaction
            };

        default:
            return state;
    }
};

export default transactionReducer;