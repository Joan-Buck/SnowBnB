import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { createBookingThunk, getBookingsThunk } from '../../store/bookings';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import './BookingForm.css';
import dayjs from 'dayjs';

const BookingForm = ({ spot, sessionUser }) => {
    const dispatch = useDispatch();
    const history = useHistory();
    const [startDate, setStartDate] = useState(new Date());
    const [endDate, setEndDate] = useState(null);
    const [available, setAvailable] = useState(true)
    const [guests, setGuests] = useState(1);
    const [disable, setDisabled] = useState('disabled');
    const [datesBooked, setDatesBooked] = useState([])
    const bookingsObj = useSelector(state => state.bookings.bookings);
    const bookings = Object.values(bookingsObj).filter(booking => +booking.spotId === spot.id)

    const options = []
    for (let i = 1; i <= spot.guests; i++) {
        options.push(i)
    }

    useEffect(() => {
        dispatch(getBookingsThunk())
    }, [])

    const onChange = (dates) => {
        const [start, end] = dates;

        setStartDate(start);
        setEndDate(end);
    };

    useEffect(() => {

        if (startDate && endDate) {
            let getBookedDates = [];

            bookings.forEach(booking => {
                let dateSliceStart = booking.startDate.slice(0, 10)
                let dateSliceEnd = booking.endDate.slice(0, 10)

                setAvailable(!(startDate.toISOString().slice(0, 10) >= dateSliceStart && startDate.toISOString().slice(0, 10) <= dateSliceEnd
                    || endDate.toISOString().slice(0, 10) >= dateSliceStart && endDate.toISOString().slice(0, 10) <= dateSliceEnd))
                setDisabled(startDate.toISOString().slice(0, 10) >= dateSliceStart && startDate.toISOString().slice(0, 10) <= dateSliceEnd
                    || endDate.toISOString().slice(0, 10) >= dateSliceStart && endDate.toISOString().slice(0, 10) <= dateSliceEnd)

                if (startDate.toISOString().slice(0, 10) >= dateSliceStart && startDate.toISOString().slice(0, 10) <= dateSliceEnd
                    || endDate.toISOString().slice(0, 10) >= dateSliceStart && endDate.toISOString().slice(0, 10) <= dateSliceEnd) {
                    getBookedDates.push(`${dayjs(dateSliceStart).format("MMM DD, YYYY")} - ${dayjs(dateSliceEnd).format("MMM DD, YYYY")}`)
                }
            })
            setDatesBooked(getBookedDates)
        }
    }, [startDate, endDate])


    const handleBooking = async () => {
        const newBooking = {
            userId: sessionUser.id,
            spotId: spot.id,
            startDate,
            endDate,
            numGuests: guests
        }

        dispatch(createBookingThunk(newBooking))
        history.push('/my-bookings');
    }

    return (
        <div className={'booking-form-container'}>
            {!available &&
                <>
                    <div className='booking-form-booked-dates'>The following dates are already booked:</div>
                    {datesBooked && (datesBooked.map((ele) =>
                        <div className='booking-form-booked-date' key={ele.id}>{ele}</div>
                    ))}

                </>
            }
            <div className='date-picker-container'>
                <DatePicker
                    selected={startDate}
                    onChange={onChange}
                    startDate={startDate}
                    endDate={endDate}
                    selectsRange
                    inline
                    minDate={new Date()}
                />
            </div>
            <label htmlFor='guests'>Guests
                <select name='numGuests' className='booking-form-select' onChange={(e) => setGuests(e.target.value)}>
                    {options.map(option => {
                        return <option value={`${option}`}>
                            {option}
                        </option>
                    })}
                </select>
            </label>
            <div className='reserve-stay-button-container'>
                <button disabled={disable} onClick={handleBooking} className={disable ? 'inactiveBtn' : 'activeBtn'}>Reserve Stay</button>
            </div>
        </div>
    )
}

export default BookingForm;
