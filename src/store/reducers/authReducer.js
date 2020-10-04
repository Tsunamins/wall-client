const initialState = {
    token: null,
    error: null, 
    loading: false
}

export default function auth(state=initialState, action) {
    switch (action.type) {
        case 'AUTH_SUCCESS': 
        return state, {
            token: action.token,
            error: null,
            loading: false
        };
        case 'AUTH_LOGOUT':
            return initialState
        default:
            return state;
    }
}