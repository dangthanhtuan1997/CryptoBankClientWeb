const initialState = { newConfirmedTransaction: false };

const transactionReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'NEW_TRANSACTION':
            return {
                ...state,
                newConfirmedTransaction: true
            };

        case 'COMPLETED_TRANSACTION':
            return {
                ...state,
                newConfirmedTransaction: false
            };

        default:
            return state;
    }
};

export default transactionReducer;