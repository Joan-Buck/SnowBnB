import React, { useEffect } from 'react';
// import * as sessionActions from '../../store/session';
import { useDispatch, useSelector } from 'react-redux';
import { getSpotsThunk } from '../../store/spots';

const SpotCard = () => {
    const dispatch = useDispatch();

    const spots = useSelector(state => state.spots.spots);
    // console.log('spots array', spots); 

    useEffect(() => {
        dispatch(getSpotsThunk())
    }, [dispatch]);


    return (
        <div>

            {spots?.map((spot) => (
                <li key={spot.id}>{spot.name}</li>
            ))}

        </div>
    )
}

export default SpotCard;
