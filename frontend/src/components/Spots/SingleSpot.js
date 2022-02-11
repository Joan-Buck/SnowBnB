import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getSpotThunk } from '../../store/spots';
import ReviewListing from '../Reviews/Reviews';
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
            <h3>{spot.name}</h3>
            <div className='spot-images-div'>
                {images?.map((image, i) => (
                    <img key={`${i}-${image}`} className='spot-img-list' src={`${image.url}`} alt="Rental"></img>
                ))}

            </div>
            <p>{spot.description}</p>
            <p>{spot.address}, {spot.city}, {spot.state}, {spot.zipcode}, {spot.country}</p>
            <p>Number of Guests: {spot.guests}</p>
            <p>Number of Bedrooms: {spot.bedrooms}</p>
            <p>Number of Bathrooms: {spot.bathrooms}</p>
            <p>Price: ${spot.price}/night</p>
            <SpotResorts resorts={nearbyResorts} />
            <div className='reviews-div'>
                <ReviewListing spotId={spotId}/>
            </div>
        </div>

    )
}

const SpotResorts = ({ resorts }) => {
    return <div className='resort-details'>
        <h3>Nearby Resort(s)</h3>
        {resorts.map(resort => <SpotResort key={resort.id} resort={resort} />)}
    </div>
}


const SpotResort = ({ resort }) => {

    let activities = [];

    if (resort.downhillSkiing) activities.push('Downhill Skiing');
    if (resort.snowboarding) activities.push('Snowboarding');
    if (resort.nordicSkiing) activities.push('Nordic Skiing');
    if (resort.snowshoeing) activities.push('Snowshoeing');
    if (resort.apresSki) activities.push('Apres Ski');

    return <>
        <p>{resort.name}</p>
        <img className='resort-img' src={`${resort.ResortImages[0]?.url}`} alt="Resort"></img>
        <div>
            <a href={resort.resortURL}>(Resort Website)</a>
            <p>Snow Level: {resort.snowLevel}</p>
            <ul className='activities-list'>Activities:
                {activities?.map((activity) => (
                    <li key={activity}>{activity}</li>
                ))}
            </ul>
        </div>
    </>
}


export default SingleSpot;
