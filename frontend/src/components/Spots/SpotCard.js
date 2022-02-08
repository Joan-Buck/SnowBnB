import React from 'react';
// import * as sessionActions from '../../store/session';

const SpotCard = ({ spot, images, resorts, resortImages}) => {

    const { id, name, description, city, state, country, guests, bedrooms, bathrooms, price } = spot;

    const imageFound = images.find((image) => image.spotId === id);
    const resortArray = Object.values(resorts);
    const resortFound = resortArray.filter((resort) => resort.state === spot.state);
    // console.log('resortFound', resortFound)

    let resName;
    resortFound.map((resort) => {
        const resName = resort.name;
    })

    return (

        <div className='spot-card'>
            <h3>{name}</h3>
            {/* get image info from spot images */}
            <img src={`${imageFound.url}`} alt='Rental'></img>
            <div className='spot-details'>
                <p>{description}</p>
                <p>{city}, {state}, {country}</p>
                <p>Number of Guests: {guests}</p>
                <p>Number of Bedrooms: {bedrooms}</p>
                <p>Number of Bathrooms: {bathrooms}</p>
                <p>Price: ${price}/night</p>
            </div>
            <div className='resort-details'>

                {/* GET RESORT INFO OUT */}
                 {/* <p>{resName}</p> */}
            </div>
        </div>
    )
}

export default SpotCard;
