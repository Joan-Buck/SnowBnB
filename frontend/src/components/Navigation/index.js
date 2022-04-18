import React from 'react'
import { NavLink, Redirect } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import ProfileButton from "./ProfileButton";
import LoginFormModal from '../LoginFormModal';
import './Navigation.css';
import * as sessionActions from '../../store/session';


const Navigation = ({ isLoaded }) => {
    const dispatch = useDispatch();
    const sessionUser = useSelector(state => state.session.user);

    const demoLogin = async (e) => {
        e.preventDefault();
        const demoUser = {
            credential: 'Demo-User',
            password: 'password'
        }

        return dispatch(sessionActions.loginUserThunk(demoUser))
        return <Redirect to="/" />

      }

    let sessionLinks;

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
                    <button className='navbar-button' onClick={demoLogin}>
                        Demo
                    </button>
                    <LoginFormModal className={'navbar-button'}/>
                    <NavLink className='signup-link' to={'/signup'}>Sign Up</NavLink>
                </div>
            </>
        )
    }

    return (
        <>
            <div className='navbar'>
                <ul className='navbar-list'>
                    <li className='navbar-li'>
                        <div className="navbar-link">
                            <NavLink exact to={'/'} className='home-link'>SnowBnB</NavLink>
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
