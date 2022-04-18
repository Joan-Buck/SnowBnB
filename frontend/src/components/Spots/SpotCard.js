import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { deleteSpotThunk } from '../../store/spots';
import './SpotCard.css';
import EditSpotFormModal from './EditSpotModal';
import GuestBookingsModal from './GuestBookingsModal';
import { getBookingsThunk } from '../../store/bookings';

const SpotCard = ({ spot, resorts, editable }) => {
    const sessionUser = useSelector(state => state.session.user);
    const bookingsObj = useSelector(state => state.bookings.bookings);
    const dispatch = useDispatch();
    const [userOwns, setUserOwns] = useState(false);
    const [showModal, setShowModal] = useState(false);



    const { id, name, description, city, state, country, guests, bedrooms, bathrooms, price, userId } = spot;
    const bookedListings = Object.values(bookingsObj).filter(booking => booking.spotId === spot.id);

    useEffect(() => {
        if (sessionUser?.id === userId) {
            setUserOwns(true)
        }
    }, [sessionUser]);

    useEffect(() => {
        dispatch(getBookingsThunk())
    }, [dispatch])

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
                <h3 className='spot-name'>{name}</h3>
                {sessionUser && (<NavLink className='details-link' to={`/spots/${id}`}
                >
                    See more info here...
                </NavLink>)}
                <p className='spot-description'>{description}</p>
                <p className='spot-location'>{city}, {state}, {country}</p>
            </div>
            {userOwns && editable && (
                <div className='spot-buttons'>
                    <EditSpotFormModal spot={spot} />
                    <button className='delete-spot-button'
                        onClick={() => dispatch(deleteSpotThunk(id))}
                    >Delete Listing</button>
                    <GuestBookingsModal bookings={bookedListings} />
                </div>
            )}
        </div>
    )
}

export default SpotCard;
