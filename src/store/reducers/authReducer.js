const initialState = {
    token: null,
    current: null
}

export default function auth(state=initialState, action) {
    switch (action.type) {
        case 'AUTH_SUCCESS': 
        return {...state,
            token: action.token,
        };
        case 'CURRENT_USER':
            return {...state,
                current: action.user,
            };  
        case 'AUTH_LOGOUT':
            return initialState
        default:
            return state;
    }
}