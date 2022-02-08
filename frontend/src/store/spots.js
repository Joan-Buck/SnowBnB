
const LOAD_SPOTS = 'spots/loadSpots';
const LOAD_USER_SPOTS = 'spots/loadUserSpots';

export const loadSpots = (spots, spotImages, resorts, resortImages) => {
    return {
        type: LOAD_SPOTS,
        spots,
        spotImages,
        resorts,
        resortImages
    }
};

export const loadUserSpots = (spots, spotImages, resorts, resortImages) => {
    return {
        type: LOAD_USER_SPOTS,
        spots,
        spotImages,
        resorts,
        resortImages
    }
}

export const getSpotsThunk = () => async(dispatch) => {
    const response = await fetch('/api/spots')

    if (response.ok) {
        const data = await response.json();
        dispatch(loadSpots(data));
    }
    return response;
}


export const getUserSpotsThunk = () => async(dispatch) => {

    const response = await fetch(`/api/spots/user`)

    if (response.ok) {
        const data = await response.json();

        dispatch(loadSpots(data));
    }
}


const initialState = {};
const spotReducer = (state = initialState, action) => {
    let newState;
    switch (action.type) {
        case LOAD_SPOTS:
            newState = {...state, ...action.spots, ...action.spotImages, ...action.resorts, ...action.resortImages};
            return newState;
        default:
            return state
    }
}

export default spotReducer;
