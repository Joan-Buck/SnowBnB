import React, {useState} from 'react';
import dayjs from 'dayjs';
import './GuestBookingsModal.css';
import { Modal } from '../../context/Modal';

function GuestBookingsModal({ bookings }) {
    const [showModal, setShowModal] = useState(false);

    return (
        <>
            <button onClick={() => setShowModal(true)}>See Bookings</button>
            {showModal && (
                <Modal onClose={() => setShowModal(false)}>
                    <div className={'guest-bookings-container'}>
                        {bookings.map((booking, i) => (
                            <div key={i}>
                                <div>{booking.Spot.name}</div>
                                <div>Starting: {dayjs(booking.startDate).format("MMM DD, YYYY")}</div>
                                <div>Ending: {dayjs(booking.startDate).format("MMM DD, YYYY")}</div>
                                <div>Num Guests: {booking.numGuests}</div>
                            </div>

                        ))}
                    </div>
                </Modal> )}
        </>
    )
}




export default GuestBookingsModal;
