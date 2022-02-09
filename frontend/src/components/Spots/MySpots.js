import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import SpotCard from './SpotCard';
import NewSpotForm from './NewSpotForm';
import { getUserSpotsThunk } from '../../store/spots';

const MyListing = () => {
    const dispatch = useDispatch();
    // const spots = useSelector(state => state.spots.listings);
    // make this SpotsArr = Object.values(spots)

    const spotsObj = useSelector(state => state.spots.listings)
    const spots = Object.values(spotsObj)
    // const images = useSelector(state => state.spots.spotImages);
    const resortsObj = useSelector(state => state.spots.resorts);
    const resorts = Object.values(resortsObj)
    // const resortImages = useSelector(state => state.spots.resortImages);
    const [renderForm, setRenderForm] = useState(false);

    useEffect(() => {
        dispatch(getUserSpotsThunk())
    }, [dispatch])

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
                <NewSpotForm hideForm={() => setRenderForm(false)}/>
            )}
            {spots.map((spot) => (
                <SpotCard spot={spot} resorts={resorts} />
            ))}
        </div>
    )
}


export default MyListing;
