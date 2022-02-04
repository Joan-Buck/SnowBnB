import React, { useState } from "react";
import * as sessionActions from '../../store/session';
import { useDispatch, useSelector } from "react-redux";
import { Redirect } from "react-router-dom";
import './SignUpForm.css';

const SignUpFormPage = () => {

    const dispatch = useDispatch();
    const sessionUser = useSelector(state => state.session.user);
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPass, setConfirmedPass] = useState('');
    const [validationErrors, setValidationErrors] = useState([]);

    if (sessionUser) return (
        <Redirect to='/' />
    )

    const submit = (e) => {
        e.preventDefault();
        if (password === confirmPass) {
            setValidationErrors([]);
            const newUser = {
                username,
                email,
                password
            }
            return dispatch(sessionActions.signUpUserThunk(newUser))
                .catch(async (res) => {
                    const data = await res.json();
                    if (data && data.errors) setValidationErrors(data.errors)
                })
        }
        return setValidationErrors(['The Confirm Password field must match the Password field.'])
    }

    return (
        <div className='signup-form-div'>
            <form className="signup-form"
                onSubmit={submit}>
                <ul className='errors-list'>
                    {validationErrors.length > 0 && validationErrors.map((error) =>
                        <li key={error}>{error}</li>)}
                </ul>
                <label>
                    Username
                </label>
                <input
                    type="text"
                    name="username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    required
                />
                <label>
                    Email
                </label>
                <input
                    type="text"
                    name="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
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
                <label>
                    Confirm Password
                </label>
                <input
                    type="password"
                    name="confirmedPassword"
                    value={confirmPass}
                    onChange={(e) => setConfirmedPass(e.target.value)}
                    required
                />
                <button
                    type="submit"
                    className='signup-button'>
                    Sign Up
                </button>
            </form>
        </div>
    )
}

export default SignUpFormPage;
