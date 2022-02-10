import React, { useEffect, } from 'react';
// import * as sessionActions from '../../store/session';
import { useDispatch, useSelector } from 'react-redux';
import { getSpotsThunk } from '../../store/spots';
import SpotCard from './SpotCard';
 // need to refactor here the same way as in MySpot
const SpotListing = () => {
    const dispatch = useDispatch();
    const user = useSelector(state => state.session.user);
    // const spots = useSelector(state => state.spots.spots);
    // const images = useSelector(state => state.spots.spotImages);
    // const resorts = useSelector(state => state.spots.resorts);
    // const resortImages = useSelector(state => state.spots.resortImages);

    const spotsObj = useSelector(state => state.spots.spots)
    const spots = Object.values(spotsObj)
    const resortsObj = useSelector(state => state.spots.resorts);
    const resorts = Object.values(resortsObj)
    // const [renderForm, setRenderForm] = useState(false);

    useEffect(() => {
        dispatch(getSpotsThunk())
    }, [dispatch]);

    return (
        <div>
            {user && (
                <a href={'/my-listings'}>My Listings</a>
            )}

            {spots.map((spot) => (
                <SpotCard key={spot.id} spot={spot} resorts={resorts} />
            ))}
        </div>
    )
}

export default SpotListing;
