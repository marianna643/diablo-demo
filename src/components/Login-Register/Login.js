import React, { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { useContext } from "react";
import {Link, useHistory} from "react-router-dom";
import axios from "axios";
import { authContext, useAuthState } from "../context/AuthContext";
import './Login.css';

function Login(){
    const { handleSubmit, register } = useForm();
    const { login } = useContext(authContext);
    const { isAuthenticated } = useAuthState();
    console.log("AUTH STUFF:", login);
    const history = useHistory();

    useEffect(() => {
        if (isAuthenticated === true) {
            history.push('/diablo');
        }
    }, [isAuthenticated]);

    async function onSubmit(data) {
        try {
            console.log("DATA UIT FORMULIER??", data);
            const response= await axios.post('http://localhost:8080/api/auth/login',data,{
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${localStorage.getItem('token')}`
                }
            });
            login(response.data);
        } catch (error) {
            console.log("Oh no", error);
        }
    }

    return(
        <>
            <div className="form-container">
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="form-inner-login">
                        <h3 className="popup-h3">Sign in</h3>
                        <label className="sign-lab" htmlFor="email-field">
                            Email address: *
                            <input className="sign-input"
                                   type="email"
                                   id="email-field"
                                   name="email"
                                   {...register("email")}
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
                        <p className="paragraph-form">New to Demo Drop? <Link className="signUp-link"to="/register">Create an account.</Link> </p>
                    </div>
                </form>
            </div>
        </>
    );
}


export default Login;