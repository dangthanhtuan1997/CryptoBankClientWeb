const initialState = { userToken: null, userInfo: null, isSignout: true };

const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'RESTORE_TOKEN':
            return {
                ...state,
                isSignout: false,
                userToken: action.userToken
            };

        case 'LOG_IN':
            return {
                ...state,
                isSignout: false,
                userToken: action.userToken,
            };

        case 'GET_USER_INFO':
            return {
                ...state,
                isSignout: false,
                userInfo: action.userInfo,
            };

        case 'LOG_OUT':
            return {
                ...state,
                isSignout: true,
                userToken: null,
                userInfo: null
            };

        case 'ADD_VOUCHER':
            const newUserInfo = state.userInfo;
            newUserInfo.voucher.push(action.voucherId);
            
            return {
                ...state,
                userInfo: newUserInfo
            };

        default:
            return state;
    }
};

export default userReducer;