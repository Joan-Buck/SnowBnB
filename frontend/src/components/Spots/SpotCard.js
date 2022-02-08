import React from 'react';
// import * as sessionActions from '../../store/session';

const SpotCard = ({ spot, images }) => {

    const { id, name, description, city, state, country, guests, bedrooms, bathrooms, price } = spot;
    // const { spotId, url} = image;
    const imageFound = images.find((image) => image.spotId === id);
    // console.log('image found url', imageFound.url)

    return (

        <div className='spot-card'>
            <h3>{name}</h3>
            {/* get image info from spot images */}
            <img src={`${imageFound.url}`}></img>
            <div className='spot-details'>
                <p>{description}</p>
                <p>{city}, {state}, {country}</p>
                <p>Number of Guests: {guests}</p>
                <p>Number of Bedrooms: {bedrooms}</p>
                <p>Number of Bathrooms: {bathrooms}</p>
                <p>Price: ${price}/night</p>
            </div>
            <div className='resort-details'>
                {/* <p>{name}</p>
                <p>Number of Guests: {guests}</p>
                <p>Number of Bedrooms: {bedrooms}</p>
                <p>Number of Bathrooms: {bathrooms}</p>
                <p>Price: ${price}/night</p> */}
            </div>
        </div>
    )
}

export default SpotCard;
