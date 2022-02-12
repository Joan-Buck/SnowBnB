import { csrfFetch } from "./csrf";

const LOAD_REVIEWS = 'reviews/loadReviews';
const LOAD_REVIEW = 'reviews/loadReview';
const DELETE_REVIEW = 'reviews/deleteReviews';

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

export const deleteReview = (reviewId) => ({
    type: DELETE_REVIEW,
    reviewId
})


// -------------------------------
export const getReviewsThunk = () => async dispatch => {
    const response = await fetch('/api/reviews/');

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

export const editReviewThunk = (review) => async dispatch => {
    const response = await csrfFetch(`/api/reviews/${review.id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(review)
    })

    if (response.ok) {
        const data = await response.json();
        dispatch(loadReview(data.review))
        return data.review
    }
}

export const deleteReviewThunk = (reviewId) => async dispatch => {
    const response = await csrfFetch(`/api/reviews/${reviewId}`, {
        method: 'DELETE'
    })

    if (response.ok) {
        dispatch(deleteReview(reviewId))
    }
}

// -------------------------------
const initialState = { reviews: {} };
const reviewReducer = (state = initialState, action) => {
    switch (action.type) {
        case LOAD_REVIEWS: {
            const reviews = {}
            action.reviews.forEach(review => { reviews[review.id] = review })
            return { ...state, reviews }
        }
        case LOAD_REVIEW: {
            const reviews = { ...state.reviews, [action.review.id]: action.review }
            return { ...state, reviews }
        }
        case DELETE_REVIEW: {
            const reviews = { ...state.reviews }
            delete reviews[action.reviewId]
            return { ...state, reviews }
        }
        default:
            return state
    }
}

export default reviewReducer;
