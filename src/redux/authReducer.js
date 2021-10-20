export const LOGIN = 'LOGIN';
export const LOGOUT = 'LOGOUT';

const initial = {
    login: null
}

const authReducer = (state = initial, action) => {
    switch (action.type) {
        case LOGIN: {
            return {
                ...state,
                login: action.payload
            }
        }
        case LOGOUT: {
            return {
                ...state,
                login: null
            }
        }

        default:
            return state;
    }
}

export default authReducer;