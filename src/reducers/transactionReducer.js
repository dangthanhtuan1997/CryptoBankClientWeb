const initialState = { data: null, status: '', reason: '' };

const transactionReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'SET_TRANSACTIONS':
            return {
                ...state,
                data: action.transactions
            };

        case 'UPDATE_STATUS':
            return {
                ...state,
                status: action.status,
                reason: action.reason
            };

        case 'RESET_STATUS':
            return {
                ...state,
                status: '',
                reason: ''
            };

        default:
            return state;
    }
};

export default transactionReducer;