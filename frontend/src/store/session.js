import { csrfFetch } from "./csrf";

const SET_SESSION_USER = 'session/setSessionUser';
const REMOVE_SESSION_USER = 'session/removeSessionUser';

export const setSessionUser = (user) => {
    return {
        type: SET_SESSION_USER,
        user
    }
}

export const removeSessionUser = () => {
    return {
        type: REMOVE_SESSION_USER
    }
}

export const loginUserThunk = (user) => async (dispatch) => {
    const { credential, password } = user;
    const response = await csrfFetch('/api/session', {
        method: 'POST',
        body: JSON.stringify({
            credential,
            password,
        }),
    });

    if (response.ok) {
        const data = await response.json();
        dispatch(setSessionUser(data.user))
    }
    return response
}

const initialState = { user: null };

const sessionReducer = (state = initialState, action) => {
    let newState;
    switch (action.type) {
        case SET_SESSION_USER:
            newState = { ...state };
            newState.user = action.user;
            return newState
        case REMOVE_SESSION_USER:
            newState = { ...state };
            delete newState[action.user]
            return newState;
        default:
            return state;
    }
}

export default sessionReducer;
