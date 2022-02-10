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

export const loadUserSpots = ({ listings, resorts }) => {
    return {
        type: LOAD_USER_SPOTS,
        listings,
        // spotImages,
        resorts,
        // resortImages
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
        dispatch(addNewSpot(newSpotToAdd))
        return newSpotToAdd;
    }
}

// set initial state to objects and refactor
const initialState = { spots: {}, listings: {}, resorts: {} };
const spotReducer = (state = initialState, action) => {
    let newState;
    switch (action.type) {
        case LOAD_SPOTS: {
            const { spots, resorts } = action
            return { ...state, spots, resorts }
        }
        case LOAD_USER_SPOTS: {
            const listings = {}
            const resorts = {}
            action.listings.forEach(listing => listings[listing.id] = listing);
            action.resorts.forEach(resort => resorts[resort.id] = resort);
            return { ...state, listings, resorts }
        }
        case ADD_SPOT: {
            const listings = { ...state.listings, [action.spot.id]: action.spot }
            return { ...state, listings }
        }
        default:
            return state
    }
}

export default spotReducer;
