import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { NavLink, useHistory } from 'react-router-dom';
import * as sessionActions from '../../store/session';
import './Navigation.css';

const ProfileButton = ({ user }) => {

    const dispatch = useDispatch();
    const [showMenu, setShowMenu] = useState(false);
    const history = useHistory();

    const openMenu = () => {
        if (showMenu) return;
        setShowMenu(true);
    }

    useEffect(() => {
        if (!showMenu) return;

        const closeMenu = () => {
            setShowMenu(false)
        }

        document.addEventListener('click', closeMenu);

        return () => document.removeEventListener('click', closeMenu);
    }, [showMenu])

    const logout = (e) => {
        e.preventDefault();
        dispatch(sessionActions.logoutThunk());
        setShowMenu(false)
        history.push('/')
    };

    return (
        <>
            <button className='profile-button' onClick={openMenu}>
                <i className="fa-solid fa-user"></i>
            </button>
            <div className='dropdown-container'>
                {showMenu && (
                    <ul className='profile-dropdown'>
                        <li className='dropdown-li-name'>Hi, {user.username}!</li>
                        <li className='dropdown-li'><NavLink to={'/'} className='dropdown-link'>Home</NavLink></li>
                        <li className='dropdown-li'><NavLink to={'/my-listings'} className='dropdown-link'>My Listings</NavLink></li>
                        <li className='dropdown-li'><NavLink to={'/spots'} className='dropdown-link'>All Listings</NavLink></li>
                        <li className='dropdown-li'><NavLink to={'/my-bookings'} className='dropdown-link'>My Bookings</NavLink></li>
                        <li className='dropdown-li'>
                            <button onClick={logout} className='logout-button'> Log Out</button>
                        </li>
                    </ul>
                )}
            </div>
        </>
    )
}

export default ProfileButton;
