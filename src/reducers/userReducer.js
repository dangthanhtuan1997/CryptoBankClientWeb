const initialState = { userToken: null, userInfo: null, loginError: null, registerError: null };

const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'RESTORE_TOKEN':
            return {
                ...state,
                userToken: action.userToken
            };

        case 'LOG_IN':
            return {
                ...state,
                userToken: action.userToken,
                loginError: action.error
            };

        case 'REGISTER':
            return {
                ...state,
                registerError: action.error
            };

        case 'SET_USER_INFO':
            return {
                ...state,
                userInfo: action.userInfo
            };

        case 'LOG_OUT':
            return {
                ...state,
                userToken: null,
                userInfo: null
            };

        default:
            return state;
    }
};

export default userReducer;