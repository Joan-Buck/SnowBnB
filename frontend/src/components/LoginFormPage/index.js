import React, { useState } from 'react';
import * as sessionActions from '../../store/session';
import { useDispatch, useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';
import './LoginForm.css';

const LoginFormPage = () => {

    const dispatch = useDispatch();
    const sessionUser = useSelector(state => state.session.user)
    const [credential, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [validationErrors, setValidationErrors] = useState([]);

    if (sessionUser) return (
        <Redirect to='/' />
    )

    const submit = (e) => {
        e.preventDefault();

        setValidationErrors([]);

        const user = {
            credential,
            password
        }

        return dispatch(sessionActions.loginUserThunk(user))
            .catch(async (res) => {
                const data = await res.json();
                if (data && data.errors) setValidationErrors(data.errors)
            });
    }

    const click = (e) => {
        e.preventDefault();

        const demoUser = {
            credential: 'Demo-User',
            password: 'password'
        }

        return dispatch(sessionActions.loginUserThunk(demoUser))
    }

    return (
        <div className='login-form-div'>
            <form className="login-form"
                onSubmit={submit}>
                <ul className='errors-list'>
                    {validationErrors.length > 0 && validationErrors.map((error) =>
                        <li key={error}>{error}</li>)}
                </ul>
                <label>
                    Username or Email
                </label>
                <input
                    type="text"
                    name="username"
                    value={credential}
                    onChange={(e) => setUsername(e.target.value)}
                    required
                />
                <label>
                    Password
                </label>
                <input
                    type="password"
                    name="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                />
                <button
                    type="submit"
                    className='login-button'>
                    Log In
                </button>
            </form>
            <button
                    type="submit"
                    className='login-demo-user'
                    onClick={click}>
                    Log In as Demo User
            </button>
        </div>
    );
}

export default LoginFormPage;
