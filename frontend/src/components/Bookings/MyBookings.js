import React, { useEffect, useState } from 'react';
import { getBookingsThunk, deleteBookingThunk } from '../../store/bookings';
import { useDispatch, useSelector } from 'react-redux';
import dayjs from 'dayjs';
import './MyBookings.css';
import { NavLink } from 'react-router-dom';


const MyBookings = () => {
    const dispatch = useDispatch();
    const bookingsObj = useSelector(state => state.bookings.bookings);
    const sessionUser = useSelector(state => state.session.user);
    const myBookings = Object.values(bookingsObj).filter(booking => +booking.userId === sessionUser.id).sort((a, b) => {
        const aDate = new Date(a.startDate)
        const bDate = new Date(b.startDate)
        return (aDate - bDate)
    })



    useEffect(() => {
        dispatch(getBookingsThunk())
    }, [dispatch])


    return (
        <div className={'bookings-container'}>
            <div className={'bookings-title-container'}>
                <div className={'bookings-title-text'}>
                    My Upcoming Stays
                </div>
            </div>
            <div className={'bookings-list-container'}>
                <div className={'my-bookings-container'}>
                    {myBookings.length ?
                        <>
                            <ol>
                                {myBookings.map((booking, i) => (
                                    <li key={i} className={'my-bookings-item'}>
                                        <NavLink to={`spots/${booking.Spot.id}`} className={'booked-spot-link'}>{booking.Spot.name}</NavLink>
                                        <div>Starting: {dayjs(booking.startDate).format("MMM DD, YYYY")}</div>
                                        <div>Ending: {dayjs(booking.endDate).format("MMM DD, YYYY")}</div>
                                        <div>Number of Guests: {booking.numGuests}</div>
                                        <button onClick={() => dispatch(deleteBookingThunk(booking.id))}>Delete</button>
                                    </li>

                                ))}
                            </ol>
                        </>
                        :
                        <div className='my-bookings-title'>You don't have any upcoming stays, find one <NavLink className={'spots-link'}to={'/spots'}>here</NavLink>.</div>
                    }
                </div>

            </div>
        </div>
    )
}

export default MyBookings;
