import { csrfFetch } from "./csrf";

const LOAD_REVIEWS = 'reviews/loadReviews';

export const loadReviews = (reviews) => {
    return {
        type: LOAD_REVIEWS,
        reviews
    }
}
// -------------------------------
export const getReviewsThunk = () => async dispatch => {
    const response = await fetch('/api/reviews');

    if (response.ok) {
        const data = await response.json();
        dispatch(loadReviews(data.reviews))
    }
    return response;
}

// -------------------------------
const initialState = { reviews: {} };
const reviewReducer = (state = initialState, action) => {
    switch (action.type) {
        // TO DO: LOAD_REVIEWS
        case LOAD_REVIEWS: {
            const reviews = {}
            action.reviews.forEach(review => { reviews[review.id] = review })
                return {...state, reviews}
        }
        // TO DO: LOAD_REVIEW - for edit and get 1 review

        // TO DO: DELETE_REVIEW



        default:
            return state
    }
}

export default reviewReducer;
