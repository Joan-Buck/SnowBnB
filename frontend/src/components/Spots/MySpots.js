import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import SpotCard from './SpotCard';
import NewSpotForm from './NewSpotForm';
import { getUserSpotsThunk } from '../../store/spots';

const MyListing = () => {
    const dispatch = useDispatch();
    const spots = useSelector(state => state.spots.listings);
    const images = useSelector(state => state.spots.spotImages);
    const resorts = useSelector(state => state.spots.resorts);
    const resortImages = useSelector(state => state.spots.resortImages);
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
            {showForm && (
                <NewSpotForm />
            )}
            {spots.map((spot) => (
                <SpotCard spot={spot} images={images} resorts={resorts} resortImages={resortImages} />
            ))}
        </div>
    )
}


export default MyListing;
