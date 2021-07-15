import React,{ useState, useEffect } from 'react';
import { useContext } from "react";
import axios from "axios";
import {authContext, useAuthState} from "../components/contexts/AuthContext";
import './LoginPage.css';
import {Link, useHistory} from "react-router-dom";



function LoginPage () {
    const { login } = useContext(authContext);
    const { isAuthenticated } = useAuthState();
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    console.log("AUTH STUFF:", login);
    const history = useHistory();

    useEffect(() => {
        if (isAuthenticated === true) {
            history.push('/');

        }
    }, [isAuthenticated]);

    async function onSubmit(event) {
        setLoading(true);
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
            setError('Login failed');
        }
        setLoading(false);
    }



    return (
        <>
            <div className="background-container">
                    <title className="titel-1">Diablo Studio</title>
                    <title className="titel-2">Demo Drop</title>
            </div>
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
                    <div className="button-container">
                        <Link className="termsLink" to="/terms-service"> Terms of Service </Link>
                        {/*<p className="trade-mark">@2021 Demo Drop</p>*/}
                    </div>

        </>
    );
}

export default LoginPage;

