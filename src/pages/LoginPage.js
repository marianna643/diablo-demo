import React, { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { useContext } from "react";
import {Link, useHistory} from "react-router-dom";
import axios from "axios";
import {authContext, useAuthState} from "../components/context/AuthContext";
import './LoginPage.css';
import Input from "../components/input/Input";
import Button from "../components/button/Button";
import Footer from "../components/footer/Footer"

function Login(){
    const { login } = useContext(authContext);
    const { isAuthenticated } = useAuthState();
    const { handleSubmit, register, formState: { errors } } = useForm();

    const history = useHistory();

    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);

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
            console.log("Login failed.", e);

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
                    <Input
                        type="username"
                        id="email-field"
                        name="username"
                        register={register}
                        required={true}
                        requiredError="This field is required."
                        errors={errors}
                    >
                        Username: *
                    </Input>

                    <Input
                        type="password"
                        id="password-field"
                        name="password"
                        register={register}
                        required={true}
                        requiredError="This field is required."
                        errors={errors}
                    >
                        Password: *
                    </Input>
                    <Button type="submit" className="sign-btn" disabled={loading}>
                        {loading ? "signing in" : "Sign in"}
                    </Button>
                    {error && <p>{error}</p>}
                    <p className="paragraph-form">New to Demo Drop? <Link className="signUp-link"to="/signup">Create an account.</Link> </p>
                </form>
            </div>
            <Footer />
        </>
    );
}


export default Login;