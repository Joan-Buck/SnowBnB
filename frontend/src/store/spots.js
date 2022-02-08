// import { csrfFetch } from "./csrf";
import { useSelector } from "react-redux";

// const sessionUser = useSelector(state => state.session.user);
//  // grab userId for user and send as param
//  console.log('sessionUser', sessionUser);

const LOAD_SPOTS = 'spots/loadSpots';

export const loadSpots = (spots, spotImages, resorts, resortImages) => {
    return {
        type: LOAD_SPOTS,
        spots,
        spotImages,
        resorts,
        resortImages
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

//testing out user spots thunk
// can i get user store info in here?
// get session user and send it as parameter
export const getUserSpotsThunk = (id) => async(dispatch) => {
    // const {id} = user;
    // console.log('id', id)
    const response = await fetch(`/api/spots/user`
    // , {
    //     method: 'GET',
    //     headers: {'Content-Type': 'application/json'},
    //     body: JSON.stringify({
    //         id
    //     })
    // }
    )
    console.log('response', response)

    if (response.ok) {
        const data = await response.json();
        dispatch(loadSpots(data))
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
