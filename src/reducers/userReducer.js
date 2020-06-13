const initialState = { accessToken: null, userInfo: null, loginError: null, registerError: null };

const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'RESTORE_TOKEN':
            return {
                ...state,
                accessToken: action.accessToken
            };

        case 'LOG_IN':
            return {
                ...state,
                accessToken: action.accessToken,
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
                accessToken: null,
                userInfo: null
            };

        default:
            return state;
    }
};

export default userReducer;