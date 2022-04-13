import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import * as sessionActions from '../../store/session';

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
                        <li>{user.username}</li>
                        <li>{user.email}</li>
                        <li>
                            <button onClick={logout}> Log Out</button>
                        </li>
                    </ul>
                )}
            </div>
        </>
    )
}

export default ProfileButton;
