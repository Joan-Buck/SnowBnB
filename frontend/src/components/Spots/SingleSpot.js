import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getSpotThunk } from '../../store/spots';
import ReviewListing from '../Reviews/Reviews';
import BookingForm from '../Bookings/BookingForm';
import './SingleSpot.css'

const SingleSpot = () => {
    const dispatch = useDispatch();
    const { spotId } = useParams();

    useEffect(() => {
        dispatch(getSpotThunk(spotId))
    }, [dispatch, spotId])

    const spot = useSelector(state => state.spots.spots[spotId])
    const resortsObj = useSelector(state => state.spots.resorts);
    const resorts = Object.values(resortsObj);

    if (!spot) return null;

    const images = spot.SpotImages;
    const nearbyResorts = resorts.filter(resort => resort.state === spot.state)

    return (
        <div className='spot-detail-card'>
            <div className='spot-details-div'>
                <div className='spot-title-info-container'>
                    <h3 className='spot-name'>{spot.name}</h3>
                    <p className='spot-description'>{spot.description}</p>
                </div>
                <div className='spot-images-div'>
                    {images?.map((image, i) => (
                        <div key={`${i}-${image}`} className='spot-img-container'>
                            <img className='spot-img-list' src={`${image.url}`} alt="Rental"></img>
                        </div>
                    ))}
                </div>
                <div>
                    <div className={'spot-details-info-container'}>
                        <p className='spot-address'>{spot.address}, {spot.city}, {spot.state}, {spot.zipcode}, {spot.country}</p>
                        <p className='spot-numbers'>Number of Guests: {spot.guests}</p>
                        <p className='spot-numbers'>Number of Bedrooms: {spot.bedrooms}</p>
                        <p className='spot-numbers'>Number of Bathrooms: {spot.bathrooms}</p>
                        <p className='spot-price'>Price: ${spot.price}/night</p>
                    </div>
                    <div className={'booking-form-container'}>
                        <BookingForm />
                    </div>
                </div>
            </div>
            <SpotResorts resorts={nearbyResorts} />
            <div className='reviews-div'>
                <ReviewListing spot={spot} />
            </div>
        </div>

    )
}

const SpotResorts = ({ resorts }) => {
    return <div className='resort-details'>
        <h3 className='resort-header'>Nearby Resort(s)</h3>
        <div>
            {resorts.map(resort => <SpotResort key={resort.id} resort={resort} />)}
        </div>
    </div>
}


const SpotResort = ({ resort }) => {

    let activities = [];

    if (resort.downhillSkiing) activities.push('Downhill Skiing');
    if (resort.snowboarding) activities.push('Snowboarding');
    if (resort.nordicSkiing) activities.push('Nordic Skiing');
    if (resort.snowshoeing) activities.push('Snowshoeing');
    if (resort.apresSki) activities.push('Apres Ski');

    return (
        <>
            <div className='top-resort-details-container'>
                <p className='resort-name'>{resort.name}</p>
                <a className='resort-url' href={resort.resortURL}>(Resort Website)</a>
                <p className='resort-snow'>Snow Level: {resort.snowLevel}</p>
            </div>
            <div className='resort-img-container'>
                <img className='resort-img' src={`${resort.ResortImages[0]?.url}`} alt="Resort"></img>
            </div>
            <div className='resort-activities-container'>
                <ul className='activities-list'>Activities:
                    {activities?.map((activity) => (
                        <li key={activity}>{activity}</li>
                    ))}
                </ul>
            </div>
        </>
    )
}


export default SingleSpot;
