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

export const retainUserSessionThunk = () => async (dispatch) => {
    const response = await csrfFetch('/api/session');

    if (response.ok) {
        const data = await response.json();
        dispatch(setSessionUser(data.user))
    }
    return response;
};

export const signUpUserThunk = (user) => async (dispatch) => {
    const {username, email, password} = user;

    const response = await csrfFetch('/api/users', {
        method: 'POST',
        body: JSON.stringify({
            username,
            email,
            password
        })
    });

    if (response.ok) {
        const data = await response.json();
        // console.log('here', data);
        dispatch(setSessionUser(data.user || null))
    }
    return response
};

const initialState = { user: null };

const sessionReducer = (state = initialState, action) => {
    let newState;
    switch (action.type) {
        case SET_SESSION_USER:
            newState = Object.assign({}, state);
            newState.user = action.user;
            return newState
        case REMOVE_SESSION_USER:
            newState = Object.assign({}, state);
            newState.user = null
            return newState;
        default:
            return state;
    }
};

export default sessionReducer;
