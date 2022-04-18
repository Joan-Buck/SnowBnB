import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import SpotCard from './SpotCard';
import { getSpotsThunk } from '../../store/spots';
import './MySpots.css';
import NewSpotFormModal from './NewSpotModal';
import { useHistory } from 'react-router-dom';

const MyListing = () => {
    const dispatch = useDispatch();
    const history = useHistory();
    const userId = useSelector(state => state.session.user.id)
    const spotsObj = useSelector(state => state.spots.spots)
    const resortsObj = useSelector(state => state.spots.resorts);
    // const sessionUser = useSelector(state => state.session.user);

    // if (!sessionUser) {
    //     history.push('/')
    // }

    const [renderForm, setRenderForm] = useState(false);

    useEffect(() => {
        window.scrollTo(0, 0);
    })

    useEffect(() => {
        dispatch(getSpotsThunk())
    }, [dispatch])

    const spots = Object.values(spotsObj).filter(spot => spot.userId === userId).sort((a, b) => {
        const aDate = new Date(a.updatedAt)
        const bDate = new Date(b.updatedAt)
        return (bDate - aDate)
    })
    const resorts = Object.values(resortsObj)


    const showForm = (e) => {
        e.preventDefault();
        setRenderForm(true);
    }

    return (
        <div className='my-listings-container'>
            <div className='title-container'>
                <div className='title-text'>My Rentals</div>
            </div>
            <div className='new-spot-btn-container'>
                <NewSpotFormModal />
            </div>
            <div className='my-listings-container'>
                {spots.map((spot) => (
                    <div className='spot-card-container'>
                        <SpotCard key={spot.id} spot={spot} resorts={resorts} editable />
                    </div>
                ))}

            </div>
        </div>
    )
}


export default MyListing;
