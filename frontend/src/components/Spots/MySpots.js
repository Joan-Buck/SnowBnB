import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import SpotCard from './SpotCard';
import NewSpotForm from './NewSpotForm';
import { getSpotsThunk, getResortsThunk } from '../../store/spots';

const MyListing = () => {
    const dispatch = useDispatch();

    const userId = useSelector(state => state.session.user.id)
    const spotsObj = useSelector(state => state.spots.spots)
    const resortsObj = useSelector(state => state.spots.resorts);

    const [renderForm, setRenderForm] = useState(false);

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
        <div>
            <button onClick={showForm} className='add-new-spot'>
                Add a new listing...
            </button>
            {renderForm && (
                <NewSpotForm hideForm={() => setRenderForm(false)} />
            )}
            {spots.map((spot) => (
                <SpotCard key={spot.id} spot={spot} resorts={resorts} editable />
            ))}
        </div>
    )
}


export default MyListing;
