import React, { useEffect, useState} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { getSpotsThunk } from '../../store/spots';
import SpotCard from './SpotCard';
import MapContainer from '../Maps';
import './SpotListing.css';

const SpotListing = () => {
    const dispatch = useDispatch();
    const user = useSelector(state => state.session.user);
    const [hoveredSpot, setHoveredSpot] = useState(null);

    const spotsObj = useSelector(state => state.spots.spots)
    const resortsObj = useSelector(state => state.spots.resorts);

    const spots = Object.values(spotsObj)
    const resorts = Object.values(resortsObj)



    useEffect(() => {
        dispatch(getSpotsThunk())
    }, [dispatch]);

    return (
        <div className={'all-listings-container'}>
            <div className='title-container'>
                <div className='title-text'>All Rentals</div>
                {user && (
                    <NavLink className={'my-listings-link'} to={'/my-listings'}>View My Listings</NavLink>
                )}
            </div>
            <div className={'listings-map-container'}>
                <div className={'listings-container'}>
                    {spots.map((spot) => (
                        <div key={spot.id} className={'spot-card-container'} onMouseEnter={(e) => setHoveredSpot(spots[e.target.id])}
                        onMouseLeave={(e) => {setHoveredSpot(null)}}>
                            <SpotCard key={spot.id} spot={spot} resorts={resorts} editable />
                        </div>
                    ))}
                </div>
                 <div className={'map-container'} >
                    <MapContainer spots={spots} hoveredSpot={hoveredSpot}/>
                </div>
            </div>
        </div>
    )
}

export default SpotListing;
