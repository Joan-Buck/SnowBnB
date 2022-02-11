import { csrfFetch } from "./csrf";

const LOAD_REVIEWS = 'reviews/loadReviews';
const LOAD_REVIEW = 'reviews/loadReview';


export const loadReviews = (reviews) => {
    return {
        type: LOAD_REVIEWS,
        reviews
    }
}

export const loadReview = (review) => ({
    type: LOAD_REVIEW,
    review
})


// -------------------------------
export const getReviewsThunk = () => async dispatch => {
    const response = await fetch('/api/reviews');

    if (response.ok) {
        const data = await response.json();
        dispatch(loadReviews(data.reviews))
    }
    return response;
}

export const createReviewThunk = (review) => async dispatch => {
    const response = await csrfFetch('/api/reviews/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(review)
    })

    if (response.ok) {
        const data = await response.json();
        dispatch(loadReview(data.review));
        return data.review
    }
}

// -------------------------------
const initialState = { reviews: {} };
const reviewReducer = (state = initialState, action) => {
    switch (action.type) {
        // TO DO: LOAD_REVIEWS
        case LOAD_REVIEWS: {
            const reviews = {}
            action.reviews.forEach(review => { reviews[review.id] = review })
            return { ...state, reviews }
        }
        // TO DO: LOAD_REVIEW - for edit and get 1 review
        case LOAD_REVIEW: {
            const reviews = {...state.reviews, [action.review.id]: action.review}
            return {...state, reviews}
        }
        // TO DO: DELETE_REVIEW



        default:
            return state
    }
}

export default reviewReducer;
