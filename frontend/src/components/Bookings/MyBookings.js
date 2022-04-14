import React, {useEffect, useState} from 'react';
import { getBookingsThunk, deleteBookingThunk } from '../../store/bookings';
import { useDispatch, useSelector } from 'react-redux';
import dayjs from 'dayjs';


const MyBookings = () => {
    const dispatch = useDispatch();
    const bookingsObj = useSelector(state => state.bookings.bookings);
    const sessionUser = useSelector(state => state.session.user);
    const myBookings = Object.values(bookingsObj).filter(booking => +booking.userId === sessionUser.id)
    // //  need to filter down to managed spots
    // const spotsObj = useSelector(state => state.spots.spots);
    // const mySpots = Object.values(spotsObj).filter(spot => spot.userId === userId)
    //     // filter on booking.spotId
    // // const guestBookings = mySpots.filter(booking )


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
                <div className={'my-bookings-container'}>
                    {myBookings.map((booking, i) => (
                        <div key={i}>
                            <div>{booking.Spot.name}</div>
                            <div>Starting: {dayjs(booking.startDate).format("MMM DD, YYYY")}</div>
                            <div>Ending: {dayjs(booking.startDate).format("MMM DD, YYYY")}</div>
                            <div>Number of Guests: {booking.numGuests}</div>
                            <button onClick={() => dispatch(deleteBookingThunk(booking.id))}>Delete</button>
                        </div>

                    ))}
                </div>
             
            </div>
        </div>
    )
}

export default MyBookings;
