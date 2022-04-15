import React from 'react';
import './HomePage.css';
import { NavLink } from 'react-router-dom';
import { BsLinkedin, BsGithub } from "react-icons/bs";
import SearchBar from '../Search/SearchBar';

function HomePage() {

    return (
        <div className={'home-component'}>
            <div className={'home-search'}>
                <div className={'search-container'}><SearchBar /></div>
            </div>
            <NavLink className={'home-spots-link'} to={'/spots'}>
                <div className={'home-banner-div'}>
                    <div className={'home-banner-img-container'}>
                        <img className={'home-banner-img'} src='https://www.skimag.com/wp-content/uploads/2021/05/SKAK_16.jpg?width=1999' alt='Ski Resort' />
                    </div>
                    <div className={'home-banner-text-container'}>
                        <div className={'home-banner-text'}>
                            Explore the snow...
                        </div>
                    </div>
                </div>
            </NavLink>
            <div className={'footer-container'}>
                <div className={'footer-button-group'}>
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
