import React, { useEffect } from 'react';
// import * as sessionActions from '../../store/session';
import { useDispatch, useSelector } from 'react-redux';
import { getSpotsThunk } from '../../store/spots';
import SpotCard from './SpotCard';

const SpotListing = () => {
    const dispatch = useDispatch();

    const spots = useSelector(state => state.spots.spots);
    // console.log('spots array', spots);

    useEffect(() => {
        dispatch(getSpotsThunk())
    }, [dispatch]);


    return (
        <div>
            {/* for logged in users a My Spots button will appear */}
            {spots?.map((spot) => (
                <SpotCard spot={spot}/>
            ))}
        </div>
    )
}

export default SpotListing;
