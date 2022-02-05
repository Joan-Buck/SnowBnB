import React from 'react'
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import ProfileButton from "./ProfileButton";
import './Navigation.css';

const Navigation = ({isLoaded}) => {

    const sessionUser = useSelector(state => state.session.user);

    let sessionLinks
    // if (!sessionUser) {
    if (sessionUser) {
        sessionLinks = (
            <>
                <ProfileButton user={sessionUser} />
            </>
        )
    } else {

        sessionLinks = (
            <>
                <div className="login-link">
                    <NavLink to={'/login'}>Log In</NavLink>
                </div>
                <div className="signup-link">
                    <NavLink to={'/signup'}>Sign Up</NavLink>
                </div>
            </>
        )
    }

return (
    <>
        <ul className="nav-bar">
            <li>
                {/* <div className="home-link"> */}
                    <NavLink exact to={'/'}>Home</NavLink>
                {/* </div> */}
                {isLoaded && sessionLinks}
            </li>
        </ul>
    </>
)
}


export default Navigation;
