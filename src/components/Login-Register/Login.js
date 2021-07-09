import React, { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { useContext } from "react";
import {Link, useHistory} from "react-router-dom";
import axios from "axios";
import {AuthContext, useAuthState} from "../context/AuthContext";
import './Login.css';

function Login(){
    const { login } = useContext(AuthContext);
    const { isAuthenticated } = useAuthState();
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const { handleSubmit, register } = useForm();
    const [loading, toggleLoading] = useState(false);
    const [error, setError] = useState('');
    console.log("AUTH STUFF:", login);
    const history = useHistory();

    useEffect(() => {
        if (isAuthenticated === true) {
            history.push('/diablo');

        }
    }, [isAuthenticated]);

    async function onSubmit(event) {
        toggleLoading(true);
        setError('');
        event.preventDefault();
        try {
            const response = await axios.post('http://localhost:8081/api/auth/login', {
                username: username,
                password: password,
            })
            login(response.data);
        } catch(e) {
            console.error(e);
            setError('Inloggen is mislukt');
        }
        toggleLoading(false);
    }

    return(
        <>
            <div className="form-container">
                <form className="signIn-form"onSubmit={onSubmit}>
                        <h3 className="popup-h3">Sign in</h3>
                    <label className="sign-lab" htmlFor="username-field">
                        Username: * </label>
                    <input className="sign-input"
                           type="text"
                           id="username-field"
                           value={username}
                           onChange={(e) => setUsername(e.target.value)}>
                    </input>

                            <label className="sign-lab" htmlFor="password-field">
                                Password: * </label>
                            <input className="sign-input"
                                   type="password"
                                   id="password-field"
                                   value={password}
                                   onChange={(e) => setPassword(e.target.value)}>
                            </input>
                        <button type="submit" className="sign-btn" >
                            Sign in
                        </button>
                        <p className="paragraph-form">New to Demo Drop? <Link className="signUp-link"to="/register">Create an account.</Link> </p>
                </form>
            </div>
        </>
    );
}


export default Login;