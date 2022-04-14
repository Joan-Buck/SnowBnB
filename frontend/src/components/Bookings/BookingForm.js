import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { createBookingThunk } from '../../store/bookings';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";


const BookingForm = ({spot, sessionUser}) => {
    // TO DO: add in dispatches
    const dispatch = useDispatch();
    const [startDate, setStartDate] = useState(new Date());
    const [endDate, setEndDate] = useState(null);
    const onChange = (dates) => {
      const [start, end] = dates;
      setStartDate(start);
      setEndDate(end);
    };

    const handleBooking = () => {
        const newBooking = {

        }
    }

    return (
        // TO DO: add in form
        <div className={'booking-form-container'}>
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
                <button onClick={handleBooking}>Reserve Stay</button>
            </div>
        </div>
    )
}

export default BookingForm;
