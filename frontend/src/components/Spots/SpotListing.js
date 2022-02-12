import React, { useEffect, } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { getSpotsThunk } from '../../store/spots';
import SpotCard from './SpotCard';

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
                <NavLink to={'/my-listings'}>My Listings</NavLink>
            )}
            {spots.map((spot) => (
                <SpotCard key={spot.id} spot={spot} resorts={resorts} editable/>
            ))}
        </div>
    )
}

export default SpotListing;
