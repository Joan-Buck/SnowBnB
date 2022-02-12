import React from 'react'
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import ProfileButton from "./ProfileButton";
import LoginFormModal from '../LoginFormModal';
import './Navigation.css';

const Navigation = ({ isLoaded }) => {

    const sessionUser = useSelector(state => state.session.user);

    let sessionLinks

    if (sessionUser) {
        sessionLinks = (
            <>
                <ProfileButton user={sessionUser} />
            </>
        )
    } else {

        sessionLinks = (
            <>
                <div className='auth-buttons'>
                    <LoginFormModal />
                    <NavLink className={'signup-link'} to={'/signup'}>Sign Up</NavLink>
                </div>
            </>
        )
    }

    return (
        <>
            <div className='navbar'>
                <ul className='navbar-list'>
                    <li className='navbar-li'>
                        <div className="home-link">
                            <NavLink exact to={'/spots'}>SnowBnB</NavLink>
                        </div>
                    </li>
                    <li className='navbar-sessionlinks'>
                        {isLoaded && sessionLinks}
                    </li>

                </ul>
            </div>
        </>
    )
}


export default Navigation;
