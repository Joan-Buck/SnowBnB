import { csrfFetch } from "./csrf";

const LOAD_SPOTS = 'spots/loadSpots';
const LOAD_USER_SPOTS = 'spots/loadUserSpots';
const ADD_SPOT = 'spots/addNewSpot';


export const loadSpots = ({ spots, spotImages, resorts, resortImages }) => {
    return {
        type: LOAD_SPOTS,
        spots,
        spotImages,
        resorts,
        resortImages
    }
};

export const loadUserSpots = ({ listings, spotImages, resorts, resortImages }) => {
    return {
        type: LOAD_USER_SPOTS,
        listings,
        spotImages,
        resorts,
        resortImages
    }
}

export const addNewSpot = spot => ({
    type: ADD_SPOT,
    spot
})

export const getSpotsThunk = () => async (dispatch) => {
    const response = await fetch('/api/spots/')

    if (response.ok) {
        const data = await response.json();
        dispatch(loadSpots(data));
    }
    return response;
}


export const getUserSpotsThunk = () => async (dispatch) => {

    const response = await fetch(`/api/spots/user`)

    if (response.ok) {
        const data = await response.json();

        dispatch(loadUserSpots(data));
    }
}

export const createSpotThunk = (payload) => async dispatch => {
    const response = await csrfFetch('/api/spots/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
    })

    if (response.ok) {
        const newSpotToAdd = await response.json();
        console.log('new spot in thunk -------', newSpotToAdd)
        dispatch(addNewSpot(newSpotToAdd))
    }
}


const initialState = { spots: [], listings: [], spotImages: [], resorts: [], resortImages: [], };
const spotReducer = (state = initialState, action) => {
    let newState;
    switch (action.type) {
        case LOAD_SPOTS: {
            const { spots, spotImages, resorts, resortImages } = action
            return { ...state, spots, spotImages, resorts, resortImages }
        }
        case LOAD_USER_SPOTS: {
            const { listings, spotImages, resorts, resortImages } = action
            return { ...state, listings, spotImages, resorts, resortImages }
        }
        case ADD_SPOT:
            newState = { ...state, ...action.spot }
            return newState;
        default:
            return state
    }
}

export default spotReducer;
