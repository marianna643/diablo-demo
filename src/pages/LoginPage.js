import React, { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { useContext } from "react";
import {Link, useHistory} from "react-router-dom";
import axios from "axios";
import {authContext, useAuthState} from "../components/context/AuthContext";
import './LoginPage.css';
import Footer from "../components/footer/Footer"

function Login(){
    const { login } = useContext(authContext);
    const { isAuthenticated } = useAuthState();
    const { handleSubmit, register } = useForm();
    console.log("AUTH STUFF:", login);
    const history = useHistory();

    useEffect(() => {
        if (isAuthenticated === true) {
            history.push('/');
        }
    }, [isAuthenticated]);

    async function onSubmit(data){
        try {
            const response = await axios.post('http://localhost:8081/api/auth/login', {
                username: data.username,
                password: data.password,
            })
            login(response.data);
        } catch(e) {
            console.error(e);
            console.log("Inloggen is mislukt", e);

        }
    }


    return(
        <>
            <div className="background-container">
                <title className="titel-1">Diablo Studio</title>
                <title className="titel-2">Demo Drop</title>
            </div>
            <div className="form-container">
                <form className="signIn-form" onSubmit={handleSubmit(onSubmit)}>
                    <h3 className="popup-h3">Sign in</h3>
                    <label className="sign-lab" htmlFor="email-field">
                        Username: *
                        <input className="sign-input"
                               type="username"
                               id="email-field"
                               name="username"
                               {...register("username")}
                        />
                    </label>

                    <label className="sign-lab" htmlFor="password-field">
                        Password: *
                        <input className="sign-input"
                               type="password"
                               id="password-field"
                               name="password"
                               {...register("password")}
                        />
                    </label>
                    <button type="submit" className="sign-btn">
                        Sign in
                    </button>
                    <p className="paragraph-form">New to Demo Drop? <Link className="signUp-link"to="/signup">Create an account.</Link> </p>
                </form>
            </div>
            <Footer />
        </>
    );
}


export default Login;