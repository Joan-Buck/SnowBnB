import React from 'react';
import './HomePage.css';
import { Link } from 'react-router-dom';
import { BsLinkedin, BsGithub } from "react-icons/bs";

function HomePage() {

    return (
        <div className='home-page'>
            <Link className='spots-link' to={'/spots'}>Explore the snow...</Link>
            <img className='home-image' src='https://www.skimag.com/wp-content/uploads/2021/05/SKAK_16.jpg?width=1999' alt='Ski Resort' />
            <div className='footer-container'>
                <div className='footer-button-group'>
                    <a href='https://www.linkedin.com/in/joan-buck/' target="_blank" rel="noopener noreferrer" className={'footer-link'}>
                        <BsLinkedin />
                    </a>
                    <a href='https://github.com/Joan-Buck/SnowBnB' target="_blank" rel="noopener noreferrer" className={'footer-link'}>
                        <BsGithub />
                    </a>
                </div>
            </div>
        </div>
    )
}


export default HomePage;
