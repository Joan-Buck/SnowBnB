import React from 'react';
import './HomePage.css';
import { NavLink } from 'react-router-dom';
import { BsLinkedin, BsGithub } from "react-icons/bs";

function HomePage() {

    return (
        <div className='home-page'>
            <NavLink className='home-component-banner-div-link' to={'/spots'}>
                <div className='home-component-banner-div'>
                    <div className='home-component-banner-img-container'>
                        <img className='home-component-banner-img' src='https://www.skimag.com/wp-content/uploads/2021/05/SKAK_16.jpg?width=1999' alt='Ski Resort' />
                    </div>
                    <div className={'home-component-banner-text-container'}>
                        <div className='home-component-banner-welcome'>
                            Explore the snow...
                        </div>
                    </div>
                </div>
            </NavLink>
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
