const initialState = { status: null, title: '', detail: '' };

const popupReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'SET_POPUP':
            return {
                ...state,
                status: action.status,
                title: action.title,
                detail: action.detail
            };

        case 'CLEAR_POPUP':
            return {
                ...state,
                status: null,
                title: '',
                detail: ''
            };

        default:
            return state;
    }
};

export default popupReducer;