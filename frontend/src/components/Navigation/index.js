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
                <div className='login'>
                    <LoginFormModal />
                </div>
                <div className='signup-link'>
                    <NavLink to={'/signup'}>Sign Up</NavLink>
                </div>

            </>
        )
    }

    return (
        <>
            <div className='navbar'>
                <ul>
                    <li>
                        <div className="home-link">
                            <NavLink exact to={'/'}>Home</NavLink>
                        </div>
                        <div className="logo">
                            LOGO
                        </div>

                        {isLoaded && sessionLinks}
              
                    </li>
                </ul>
            </div>
        </>
    )
}


export default Navigation;
