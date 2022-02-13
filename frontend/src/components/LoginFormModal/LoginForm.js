import React, { useState } from 'react';
import * as sessionActions from '../../store/session';
import { useDispatch } from 'react-redux';
import './LoginForm.css';

const LoginForm = () => {

    const dispatch = useDispatch();

    const [credential, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [validationErrors, setValidationErrors] = useState([]);

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
                <ul className='form-errors'>
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

                />
                <label>
                    Password
                </label>
                <input
                    type="password"
                    name="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <button
                    type="submit"
                    className='login-button-modal'>
                    Log In
                </button>
                <button
                    type="submit"
                    className='login-demo-user-button'
                    onClick={click}>
                    Demo Login
                </button>
            </form>
        </div>
    );
}

export default LoginForm;
