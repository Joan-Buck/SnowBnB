import { csrfFetch } from "./csrf";

const LOAD_BOOKINGS = 'bookings/loadBookings';
const LOAD_BOOKING = 'booking/loadBooking';
const DELETE_BOOKING = 'bookings/deleteBookings';

export const loadBookings = (bookings) => {
    return {
        type: LOAD_BOOKINGS,
        bookings
    }
}

export const loadBooking = (booking) => ({
    type: LOAD_BOOKING,
    booking
})

export const deleteBooking = (bookingId) => ({
    type: DELETE_BOOKING,
    bookingId
})


// -------------------------------
export const getBookingsThunk = () => async dispatch => {
    const response = await fetch('/api/bookings/');

    if (response.ok) {
        const data = await response.json();
        console.log('get data', data)
        dispatch(loadBookings(data.bookings))
    }
    return response;
}

export const createBookingThunk = (booking) => async dispatch => {
    const response = await csrfFetch('/api/bookings/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json'},
        body: JSON.stringify({
            userId: booking.userId,
            spotId: booking.spotId,
            startDate: booking.startDate,
            endDate: booking.endDate,
            numGuests: booking.numGuests
        })
    })

    if (response.ok) {
        const data = await response.json();
        dispatch(loadBooking(data));
        return data.booking
    }
}


export const deleteBookingThunk = (bookingId) => async dispatch => {
    const response = await csrfFetch(`/api/bookings/${bookingId}`, {
        method: "DELETE",
        headers: {
            "Content-Type": "application/json"}
    })

    if (response.ok) {
        dispatch(deleteBooking(bookingId))
    }
}

// -------------------------------
const initialState = { bookings: {} };
const bookingReducer = (state = initialState, action) => {
    switch (action.type) {
        case LOAD_BOOKINGS: {
            const bookings = {}
            action.bookings.forEach(booking => { bookings[booking.id] = booking })
            return { ...state, bookings }
        }
        case LOAD_BOOKING: {
            const bookings = { ...state.bookings, [action.booking.id]: action.booking }
            return { ...state, bookings }
        }
        case DELETE_BOOKING: {
            const bookings = { ...state.bookings }
            delete bookings[action.bookingId]
            return { ...state, bookings }
        }
        default:
            return state
    }
}

export default bookingReducer;
