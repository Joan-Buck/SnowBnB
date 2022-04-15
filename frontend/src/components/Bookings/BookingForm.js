import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { createBookingThunk, getBookingsThunk } from '../../store/bookings';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import './BookingForm.css';

const BookingForm = ({ spot, sessionUser }) => {
    // TO DO: add in dispatches
    const dispatch = useDispatch();
    const [startDate, setStartDate] = useState(new Date());
    const [endDate, setEndDate] = useState(null);
    const [available, setAvailable] = useState(true)
    const [disable, setDisabled] = useState('disabled');
    const [datesBooked, setDatesBooked] = useState([])
    const bookingsObj = useSelector(state => state.bookings.bookings);
    const bookings = Object.values(bookingsObj).filter(booking => +booking.spotId === spot.id)

    useEffect(() => {
        dispatch(getBookingsThunk())
    }, [])

    const onChange = (dates) => {
        const [start, end] = dates;

        setStartDate(start);
        setEndDate(end);
    };
   
    useEffect(() => {
        // TO DO: format dates getBookedDates.push(`${dayjs(item.startDate).format("MMM DD, YYYY")} - ${dayjs(item.endDate).format("MMM DD YYYY")}`)
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
                    getBookedDates.push(`${dateSliceStart} - ${dateSliceEnd}`)
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
            numGuests: 2
        }

        dispatch(createBookingThunk(newBooking))

    }

    return (
        // TO DO: add in form
        <div className={'booking-form-container'}>
            {!available &&
                <>
                    <div>The following dates are already booked:</div>
                    {datesBooked && (datesBooked.map((ele) =>
                        <div key={ele.id}>{ele}</div>
                    ))}

                </>
            }
            <div><DatePicker
                selected={startDate}
                onChange={onChange}
                startDate={startDate}
                endDate={endDate}
                selectsRange
                inline
            />
            </div>
            <div>
                <button disabled={disable} onClick={handleBooking} className={disable ? 'inactiveBtn' : 'activeBtn'}>Reserve Stay</button>
            </div>
        </div>
    )
}

export default BookingForm;
