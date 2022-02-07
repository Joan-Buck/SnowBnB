import React, { useEffect } from 'react';
// import * as sessionActions from '../../store/session';
import { useDispatch, useSelector } from 'react-redux';
import { getSpotsThunk } from '../../store/spots';

const SpotCard = () => {
    const dispatch = useDispatch();

    const spots = useSelector(state => state.spots.spots);
    console.log('spots array', spots); // getting stuck on this line

    useEffect(() => {
        dispatch(getSpotsThunk())
    }, [dispatch]);

    // try to get something rendering
    return (
        <div>

            {spots.map((spot) => (
                <li key={spot.id}>{spot.name}</li>
            ))}

        </div>
    )
}

export default SpotCard;
