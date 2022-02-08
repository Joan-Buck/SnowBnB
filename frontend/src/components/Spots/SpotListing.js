import React, { useEffect, } from 'react';
// import * as sessionActions from '../../store/session';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { getSpotsThunk, getUserSpotsThunk } from '../../store/spots';
import SpotCard from './SpotCard';

const SpotListing = () => {
    const dispatch = useDispatch();
    const user = useSelector(state => state.session.user);
    const spots = useSelector(state => state.spots.spots);
    const images = useSelector(state => state.spots.spotImages);
    const resorts = useSelector(state => state.spots.resorts);
    const resortImages = useSelector(state => state.spots.resortImages);
    const history = useHistory();

    useEffect(() => {
        dispatch(getSpotsThunk())
    }, [dispatch]);

    const click = (e) => {
        e.preventDefault();
        dispatch(getUserSpotsThunk())
        history.push('/my-listings')
    }

    return (
        <div>
            {user && (
                <button onClick={click}>My Listings</button>
            )}

            {spots?.map((spot) => (
                <SpotCard spot={spot} images={images} resorts={resorts} resortImages={resortImages}/>
            ))}
        </div>
    )
}

export default SpotListing;
