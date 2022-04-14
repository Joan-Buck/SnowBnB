import React from 'react';

const MyBookings = () => {

    return (
        <div className={'bookings-container'}>
            <div className={'bookings-title-container'}>
                <div className={'bookings-title-text'}>
                    My Bookings
                </div>
            </div>
            <div className={'bookings-list-container'}>
                {/* TO DO: add in map of each booking for this user */}
                {/* TO DO: add in delete button here on each booking */}
            </div>
        </div>
    )
}

export default MyBookings;
