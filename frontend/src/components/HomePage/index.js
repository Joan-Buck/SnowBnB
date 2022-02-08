import React from 'react';
import './HomePage.css';
import { Link } from 'react-router-dom';

function HomePage() {

    return (
        <div className='home-page'>
            <Link className='spots-link' to={'/spots'}>Explore where the snow is...</Link>
            <img src='https://www.skimag.com/wp-content/uploads/2021/05/SKAK_16.jpg?width=1999' />
        </div>
    )
}


export default HomePage;
