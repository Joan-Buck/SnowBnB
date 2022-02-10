import React from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import './SingleSpot.css'

const SingleSpot = () => {
    // const dispatch = useDispatch();
    const { spotId } = useParams();
    console.log(spotId)

    const spots = useSelector(state => state.spots.spots)
    const spot = spots.find(spot => Number(spot.id) === Number(spotId))
    // console.log('spots======', spots)
    // console.log('spot=====', spot)
    const images = spot.SpotImages;
    console.log(images);

    const resorts = useSelector(state => state.spots.resorts);
    const resort = resorts.find(resort => resort.state === spot.state)
    const resortImages = resort.ResortImages
    // const resorts = Object.values(resortsObj)


    // useEffect(() => {
    //     dispatch(loadOneSpotThunk(spot))
    // }, [dispatch]);

    // [action.spot.resort]


    return (
        <div className='spot-detail-card'>
            <h3>{spot.name}</h3>
            <div className='spot-images-div'>
                {images?.map((image) => (
                    <img key={image} className='spot-img-list' src={`${image.url}`} alt="Rental"></img>
                ))}
            </div>
            <p>{spot.description}</p>
            <p>{spot.address}, {spot.city}, {spot.state}, {spot.zipcode}, {spot.country}</p>
            <p>Number of Guests: {spot.guests}</p>
            <p>Number of Bedrooms: {spot.bedrooms}</p>
            <p>Number of Bathrooms: {spot.bathrooms}</p>
            <p>Price: ${spot.price}/night</p>
            <div className='resort-details'>Nearby Resort(s)
                <p>{resort.name}</p>
                <img className='resort-img' src={`${resortImages[0].url}`} alt="Resort"></img>
                <a href={resort.resortURL}>(Resort Details)</a>
                <p>Snow Level: {resort.snowLevel}</p>
                <ul className='activities-list'>Activities:
                    {resort.activities?.map((activity) => (
                        <li key={activity}>{activity}</li>
                    ))}
                </ul>
            </div>
            <div className='reviews-div'>
                REVIEWS COMING
            </div>
        </div>

    )
}

export default SingleSpot;
