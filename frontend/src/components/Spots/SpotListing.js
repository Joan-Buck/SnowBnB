import React, { useEffect, } from 'react';
// import * as sessionActions from '../../store/session';
import { useDispatch, useSelector } from 'react-redux';
import { getSpotsThunk } from '../../store/spots';
import SpotCard from './SpotCard';

const SpotListing = () => {
    const dispatch = useDispatch();
    const user = useSelector(state => state.session.user);
    const spots = useSelector(state => state.spots.spots);
    const images = useSelector(state => state.spots.spotImages);
    const resorts = useSelector(state => state.spots.resorts);
    const resortImages = useSelector(state => state.spots.resortImages);

    useEffect(() => {
        dispatch(getSpotsThunk())
    }, [dispatch]);

    return (
        <div>
            {user && (
                <a href={'/my-listings'}>My Listings</a>
            )}

            {spots.map((spot) => (
                <SpotCard spot={spot} images={images} resorts={resorts} resortImages={resortImages} />
            ))}
        </div>
    )
}

export default SpotListing;
