import React, {useEffect} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import SpotCard from './SpotCard';
import { getUserSpotsThunk } from '../../store/spots';

const MyListing = () => {
    const dispatch = useDispatch();
    const spots = useSelector(state => state.spots.listings);
    const images = useSelector(state => state.spots.spotImages);
    const resorts = useSelector(state => state.spots.resorts);
    const resortImages = useSelector(state => state.spots.resortImages);
    useEffect(() => {
        dispatch(getUserSpotsThunk())
    }, [dispatch])

    return (
        <div>
             {spots?.map((spot) => (
                <SpotCard spot={spot} images={images} resorts={resorts} resortImages={resortImages}/>
            ))}
        </div>
    )
}


export default MyListing;
