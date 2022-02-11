import { csrfFetch } from "./csrf";

const LOAD_SPOTS = 'spots/loadSpots';
const LOAD_SPOT = 'spots/loadSpot';
const DELETE_SPOT = 'spots/deleteSpot';
const LOAD_RESORTS = 'spots/loadResorts';

// --------------------

export const loadSpots = (spots) => {
    return {
        type: LOAD_SPOTS,
        spots,
    }
};

export const loadSpot = (spot) => ({
    type: LOAD_SPOT,
    spot
})

export const deleteSpot = (spotId) => ({
    type: DELETE_SPOT,
    spotId
})

export const loadResorts = (resorts) => {
    return {
        type: LOAD_RESORTS,
        resorts,
    }
};

// --------------------

export const getSpotsThunk = () => async (dispatch) => {
    const response = await fetch('/api/spots/')

    if (response.ok) {
        const data = await response.json();
        dispatch(loadSpots(data.spots));
    }
    return response;
}


export const getSpotThunk = (spotId) => async dispatch => {
    const response = await fetch(`/api/spots/${spotId}`)

    if (response.ok) {
        const data = await response.json();
        dispatch(loadSpot(data.spot))
        return data;
    }
}


export const createSpotThunk = (spot) => async dispatch => {
    const response = await csrfFetch('/api/spots/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(spot)
    })

    if (response.ok) {
        const data = await response.json();
        dispatch(loadSpot(data.spot))
        return data.spot;
    }
}

export const deleteSpotThunk = (spotId) => async dispatch => {
    const response = await csrfFetch(`/api/spots/${spotId}`, {
        method: 'DELETE'
    })

    if (response.ok) {
        dispatch(deleteSpot(spotId))
    }
}

export const editSpotThunk = (spot) => async dispatch => {
    const response = await csrfFetch(`/api/spots/${spot.id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(spot)
    })

    if (response.ok) {
        const data = await response.json();
        dispatch(loadSpot(data.spot))
        return data.spot;
    }
}

export const getResortsThunk = () => async (dispatch) => {
    const response = await fetch('/api/resorts/')

    if (response.ok) {
        const data = await response.json();
        console.log({ d: data.resorts })
        dispatch(loadResorts(data.resorts));
    }
    return response;
}

// --------------------

const initialState = { spots: {}, resorts: {} };
const spotReducer = (state = initialState, action) => {
    switch (action.type) {
        case LOAD_SPOTS: {
            const spots = {}
            action.spots.forEach(spot => { spots[spot.id] = spot })
            return { ...state, spots }
        }
        case LOAD_SPOT: {
            const spots = { ...state.spots, [action.spot.id]: action.spot }
            return { ...state, spots }
        }
        case DELETE_SPOT: {
            const spots = { ...state.spots }
            delete spots[action.spotId];
            return { ...state, spots };
        }
        case LOAD_RESORTS: {
            const resorts = {}
            action.resorts.forEach(resort => { resorts[resort.id] = resort })
            return { ...state, resorts }
        }
        default:
            return state
    }
}

export default spotReducer;
