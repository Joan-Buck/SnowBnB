import React from 'react';
import { NavLink, Redirect } from 'react-router-dom';
import { useSelector } from 'react-redux';
import LoginFormModal from '../LoginFormModal/index';
import './LoginRequired.css';

const LoginRequired = () => {
    const sessionUser = useSelector((state) => state.session.user)

    if (sessionUser) {
        return <Redirect to='/' />
    }

    return (
        <div className={'login-required-container'}>
            <h2 className={'login-required-title'}>Please Login or Sign Up Below to Explore the Site</h2>
            <div className={'login-required-button-group'}>
                <LoginFormModal className={'login-required-button'} />
                <p className={'login-required-text'}>OR</p>
                <NavLink to='/signup' exact={true} className={'login-required-link'}>Sign Up</NavLink>
            </div>
        </div>
    )
}

export default LoginRequired;
