const initialState = { newConfirmedTransaction: false, newFailedTransaction: false };

const transactionReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'NEW_SUCCESS_TRANSACTION':
            return {
                ...state,
                newConfirmedTransaction: true,
            };

        case 'NEW_FAIL_TRANSACTION':
            return {
                ...state,
                newFailedTransaction: true,
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