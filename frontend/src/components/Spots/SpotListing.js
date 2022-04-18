import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getSpotsThunk } from '../../store/spots';
import SpotCard from './SpotCard';
import MapContainer from '../Maps';
import './SpotListing.css';
import { useHistory } from 'react-router-dom';

const SpotListing = () => {
    const dispatch = useDispatch();
    const history = useHistory();
    const user = useSelector(state => state.session.user);
    const [hoveredSpot, setHoveredSpot] = useState(null);

    const spotsObj = useSelector(state => state.spots.spots)
    const resortsObj = useSelector(state => state.spots.resorts);

    const spots = Object.values(spotsObj)
    const resorts = Object.values(resortsObj)

    if (!user) {
        history.push('/')
    }

    // useEffect(() => {
    //     window.scrollTo(0, 0);
    // })

    useEffect(() => {
        dispatch(getSpotsThunk())
    }, [dispatch]);



    return (
        <div className={'all-listings-container'}>
            <div className='title-container'>
                <div className='title-text'>All Rentals</div>
            </div>
            <div className={'listings-map-container'}>
                <div className={'listings-container'}>
                    {spots.map((spot) => (
                        <div key={spot.id} className={'spot-card-container'} onMouseEnter={(e) => setHoveredSpot(spot)}
                            onMouseLeave={(e) => setHoveredSpot(null)}>
                            <SpotCard key={spot.id} spot={spot} resorts={resorts} editable />
                        </div>
                    ))}
                </div>
                <div className={'map-container'} >
                    <MapContainer spots={spots} hoveredSpot={hoveredSpot} />
                </div>
            </div>
        </div>
    )
}

export default SpotListing;
