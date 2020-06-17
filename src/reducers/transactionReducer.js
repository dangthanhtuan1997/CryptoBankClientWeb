const initialState = { data: null, newConfirmedTransaction: false, newFailedTransaction: false, failReason: '' };

const transactionReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'SET_TRANSACTIONS':
            return {
                ...state,
                data: action.transactions
            };

        case 'NEW_SUCCESS_TRANSACTION':
            return {
                ...state,
                newConfirmedTransaction: true,
            };

        case 'NEW_FAIL_TRANSACTION':
            return {
                ...state,
                newFailedTransaction: true,
                failReason: action.failReason
            };

        case 'COMPLETED_TRANSACTION':
            return {
                ...state,
                newConfirmedTransaction: false,
                newFailedTransaction: false
            };

        default:
            return state;
    }
};

export default transactionReducer;