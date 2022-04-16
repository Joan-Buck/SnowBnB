import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink, useParams } from 'react-router-dom';
import { getSpotsThunk } from '../../store/spots';
import SpotCard from '../Spots/SpotCard';
import MapContainer from '../Maps';
import '../Spots/SpotListing.css';
import { getBookingsThunk } from '../../store/bookings';

const SearchResult = () => {
    const dispatch = useDispatch();
    const user = useSelector(state => state.session.user);

    const { location, startDate, endDate, guests } = useParams();
    const [hoveredSpot, setHoveredSpot] = useState(null);

    const spotsObj = useSelector(state => state.spots.spots)
    const resortsObj = useSelector(state => state.spots.resorts);

    const spots = Object.values(spotsObj)
    const resorts = Object.values(resortsObj)
    const bookingsObj = useSelector(state => state.bookings.bookings);
    const bookings = Object.values(bookingsObj)


    useEffect(() => {
        dispatch(getSpotsThunk())
        dispatch(getBookingsThunk())
    }, [dispatch])

    let searchResults;
    let listingIds = [];
    let listingsWithBookings = {};
    let searchSet = new Set();


    const filteredResults = spots.map(spot => {

        if ((location.toLowerCase() === spot.city.toLowerCase() || location.toLowerCase() === spot.state.toLowerCase()) && +spot.guests >= +guests) {
            if (spot.Bookings.length) {
                listingIds.push(spot.id)
                listingsWithBookings[spot.id] = spot
            } else if (spot.Bookings.length === 0) {
                searchSet.add(spot)
            }
        }
    })

    bookings.forEach(b => {
        if (listingIds.includes(b.spotId)) {

            if (!(startDate >= b.startDate.slice(0, 10) && startDate <= b.endDate.slice(0, 10)
                || endDate >= b.startDate.slice(0, 10) && endDate <= b.endDate.slice(0, 10))) {
                searchSet.add(listingsWithBookings[b.spotId])
            }
        }
    });

    searchResults = Array.from(searchSet)


    return (
        <div className={'all-listings-container'}>
            <div className='title-container'>
                <div className='title-text'>Rentals Matching Your Search</div>
            </div>
            <div className={'listings-map-container'}>
                <div className={'listings-container'}>
                    {searchResults.length ?
                        <>
                            {searchResults.map((spot) => (
                                <div key={spot.id} className={'spot-card-container'} onMouseEnter={(e) => setHoveredSpot(spot)}
                                    onMouseLeave={(e) => setHoveredSpot(null)}>
                                    <SpotCard key={spot.id} spot={spot} resorts={resorts} editable />
                                </div>
                            ))}
                        </>
                        :
                        <div>No rentals were found matching your search. Please <NavLink className={'search-link'} to={'/'}>search</NavLink> again.</div>
                    }
                </div>
                <div className={'map-container'} >
                    <MapContainer spots={searchResults} hoveredSpot={hoveredSpot} />
                </div>
            </div>
        </div>
    )
}

export default SearchResult;
