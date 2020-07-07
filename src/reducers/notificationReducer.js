const initialState = { data: [], notificationLength: 0 };

const notificationReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_NOTIFICATION': {
            const newData = [...state.data];
            newData.push({
                title: action.title,
                content: action.content
            });
            
            return {
                ...state,
                data: [...newData],
                notificationLength: state.notificationLength + 1
            };
        }

        case 'SEEN_NOTIFICATION': {
            return {
                ...state,
                notificationLength: 0
            };
        }

        default:
            return state;
    }
};

export default notificationReducer;