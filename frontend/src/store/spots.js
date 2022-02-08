
const LOAD_SPOTS = 'spots/loadSpots';

export const loadSpots = (spots) => {
    return {
        type: LOAD_SPOTS,
        spots
    }
};

export const getSpotsThunk = () => async(dispatch) => {
    const response = await fetch('/api/spots')

    if (response.ok) {
        const data = await response.json();
        dispatch(loadSpots(data));
    }
    return response;
}


const initialState = {};
const spotReducer = (state = initialState, action) => {
    let newState;
    switch (action.type) {
        case LOAD_SPOTS:
            newState = {...state, ...action.spots};
            return newState;
        default:
            return state
    }
}

export default spotReducer;
