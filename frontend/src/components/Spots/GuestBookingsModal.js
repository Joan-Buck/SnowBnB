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
                        {bookings.length ?
                            <>
                            <div className='guest-bookings-title'>Upcoming Stays</div>
                                {bookings.map((booking, i) => (
                                    <div key={i} >
                                        {/* <div>{booking.Spot.name}</div> */}
                                        <div>Starting: {dayjs(booking.startDate).format("MMM DD, YYYY")}</div>
                                        <div>Ending: {dayjs(booking.endDate).format("MMM DD, YYYY")}</div>
                                        <div>Num Guests: {booking.numGuests}</div>
                                    </div>

                                ))}
                            </>
                            :
                            <div className='guest-bookings-title'>There are currently no bookings on this listing.</div>
                    }
                    </div>
                </Modal>)}
        </>
    )
}




export default GuestBookingsModal;
