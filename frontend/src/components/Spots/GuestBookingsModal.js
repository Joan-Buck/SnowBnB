import React, { useState } from 'react';
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
                        <div className='guest-bookings-title-container'>
                            <div className='guest-bookings-title'>Upcoming Stays</div>
                        </div>
                        <div className='booked-listings-container'>
                            {bookings.length ?
                                <>
                                    <ol>
                                        {bookings.map((booking, i) => (
                                            <li key={i} className={'bookings-item'}>
                                                <div>Starting: {dayjs(booking.startDate).format("MMM DD, YYYY")}</div>
                                                <div>Ending: {dayjs(booking.endDate).format("MMM DD, YYYY")}</div>
                                                <div>Number of Guests: {booking.numGuests}</div>
                                            </li>

                                        ))}
                                    </ol>
                                </>
                                :
                                <div className='guest-bookings-text-container'>
                                    <div className='guest-bookings-text'>There are currently no bookings on this listing.</div>
                                </div>
                            }
                        </div>
                    </div>
                </Modal>)}
        </>
    )
}




export default GuestBookingsModal;
