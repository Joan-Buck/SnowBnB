import React, { useEffect, } from 'react';
// import * as sessionActions from '../../store/session';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { getResortsThunk, getSpotsThunk } from '../../store/spots';
import SpotCard from './SpotCard';
// need to refactor here the same way as in MySpot

const SpotListing = () => {
    const dispatch = useDispatch();
    const user = useSelector(state => state.session.user);

    const spotsObj = useSelector(state => state.spots.spots)
    const resortsObj = useSelector(state => state.spots.resorts);

    const spots = Object.values(spotsObj)
    const resorts = Object.values(resortsObj)

    useEffect(() => {
        dispatch(getSpotsThunk())
    }, [dispatch]);

    return (
        <div>
            {user && (
                // this needs to be nav link
                <NavLink to={'/my-listings'}>My Listings</NavLink>
            )}
            {spots.map((spot) => (
                <SpotCard key={spot.id} spot={spot} resorts={resorts} />
            ))}
        </div>
    )
}

export default SpotListing;
