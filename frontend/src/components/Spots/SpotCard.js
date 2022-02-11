import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { deleteSpotThunk } from '../../store/spots';
import EditSpotForm from './EditSpotForm';
import { Modal } from '../../context/Modal';
import './SpotCard.css';
import EditSpotFormModal from './EditSpotModal';


const SpotCard = ({ spot, resorts, editable }) => {
    const sessionUser = useSelector(state => state.session.user);
    const dispatch = useDispatch();
    const [userOwns, setUserOwns] = useState(false);
    const [renderForm, setRenderForm] = useState(false);
    const [showModal, setShowModal] = useState(false);

    const { id, name, description, city, state, country, guests, bedrooms, bathrooms, price, userId } = spot;

    useEffect(() => {
        if (sessionUser?.id === userId) {
            setUserOwns(true)
        }
    }, [sessionUser]);

    const images = spot.SpotImages ?? []
    const nearbyResorts = resorts.filter((resort) => resort.state === spot.state);

    let resName;
    let downhillSkiing;
    let snowboarding;
    let nordicSkiing;
    let apresSki;
    let snowshoeing;
    let snowLevel;
    let resortURL;
    let resortId;

    nearbyResorts.map((resort) => {
        resName = resort.name;
        downhillSkiing = resort.downhillSkiing;
        snowboarding = resort.snowboarding;
        nordicSkiing = resort.nordicSkiing
        apresSki = resort.apresSki;
        snowshoeing = resort.snowshoeing;
        snowLevel = resort.snowLevel;
        resortURL = resort.resortURL;
        resortId = resort.id;
    })

    let activities = [];
    if (downhillSkiing) activities.push('Downhill Skiing');
    if (snowboarding) activities.push('Snowboarding');
    if (nordicSkiing) activities.push('Nordic Skiing');
    if (snowshoeing) activities.push('Snowshoeing');
    if (apresSki) activities.push('Apres Ski');


    return (
        <div className='spot-card'>
            {images[0] ? <img className='main-spot-img' src={`${images[0].url}`} alt='Rental'></img> : <div>No Images Found</div>}
            <div className='spot-details'>
                <h3>{name}</h3>
               {sessionUser && ( <NavLink className='details-link' to={`/spots/${id}`}
                >
                    Listing Details
                </NavLink>)}
                <p>{description}</p>
                <p>{city}, {state}, {country}</p>
                <p>Number of Guests: {guests}</p>
                <p>Number of Bedrooms: {bedrooms}</p>
                <p>Number of Bathrooms: {bathrooms}</p>
                <p>Price: ${price}/night</p>
            </div>
            <div className='resort-details'>Nearby Resort(s)
                <p>{resName}</p>
                {/* <a href={resortURL}>(Resort Details)</a> */}
                <p>Snow Level: {snowLevel}</p>
                <ul className='activities-list'>Activities:
                    {activities.map((activity) => (
                        <li key={activity}>{activity}</li>
                    ))}
                </ul>
            </div>
            {userOwns && editable && (
                <div className='spot-buttons'>
                    <EditSpotFormModal spot={spot} />
                    <button className='delete-spot-button'
                        onClick={() => dispatch(deleteSpotThunk(id))}
                    >Delete Listing</button>
                </div>
            )}
        </div>
    )
}

export default SpotCard;
