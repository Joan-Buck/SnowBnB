import React, {useEffect, useState} from 'react';
import { getBookingsThunk, deleteBookingThunk } from '../../store/bookings';
import { useDispatch, useSelector } from 'react-redux';
import dayjs from 'dayjs';


const MyBookings = () => {
    const dispatch = useDispatch();
    const bookingsObj = useSelector(state => state.bookings.bookings);
    const sessionUser = useSelector(state => state.session.user);
    const bookings = Object.values(bookingsObj).filter(booking => +booking.userId === sessionUser.id)
    // let spots = [];
    // bookings.forEach(booking => spots.push(booking.Spot))
    // console.log('=======', spots)

    // const filteredSpots = spots.filter(spot => +booking.spotId === spot.id)

    useEffect(() => {
        dispatch(getBookingsThunk())
    }, [dispatch])


    return (
        <div className={'bookings-container'}>
            <div className={'bookings-title-container'}>
                <div className={'bookings-title-text'}>
                    My Bookings
                </div>
            </div>
            <div className={'bookings-list-container'}>
                {/* TO DO: add in map of each booking this user owns, bookings/dates*/}
                <div>
                    {bookings.map((booking, i) => (
                        <div key={i}>
                            <div>{booking.Spot.name}</div>
                            <div>Starting: {dayjs(booking.startDate).format("MMM DD, YYYY")}</div>
                            <div>Ending: {dayjs(booking.startDate).format("MMM DD, YYYY")}</div>
                            <div>Num Guests: {booking.numGuests}</div>
                            <button onClick={() => dispatch(deleteBookingThunk(booking.id))}>Delete</button>
                        </div>

                    ))}
                </div>
                {/* TO DO: owner can book their own stay */}
                {/* TO DO: add in delete button here on each booking, booking can only be deleted by user who created it*/}
                {/* TO DO: add in booking at properties the user owns: list out properties and dates booked */}
            </div>
        </div>
    )
}

export default MyBookings;
