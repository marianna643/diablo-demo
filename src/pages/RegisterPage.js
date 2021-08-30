import React,  { useState } from 'react';
import { useForm } from 'react-hook-form';
import './RegisterPage.css';
import {Link, useHistory} from "react-router-dom";
import axios from "axios";
import Footer from "../components/footer/Footer";



function Register() {
    const history = useHistory();
    const { handleSubmit, register ,formState: { errors }} = useForm();
    const [success, setSucces] = useState(false);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');


    async function onSubmit(data) {
        // console.log("DATA VAN DE GEBRUIKER??", data);
        try {
            const response = await axios.post('http://localhost:8081/api/auth/signup', {
                username: data.username,
                firstName: data.firstName,
                lastName: data.lastName,
                country: data.country,
                password: data.password,
                email: data.email,
                facebook: data.facebook,
                instagram: data.instagram,
                role: ["user"],
            });

            if (response.status === 200) {
                console.log(response);
                setSucces(true);
                setTimeout(() => history.push("/login"), 2000);
            }
        } catch (e) {
            console.error(e);
            if (e.message.includes('400')) {
                setError('User already exists');
            } else {
                setError('Something went wrong while fetching data');
            }
        }

        setLoading(false);
    }

    return (
        <>
            <p>{success && "Registeren is gelukt!"}</p>
            <p>{loading && "Moment geduld aub"}</p>
            <div className="background-container">
                <title className="titel-1">Diablo Studio</title>
                <title className="titel-2">Demo Drop</title>
                <div className="button-container">
                    <div className="copyright">
                        <Link className="termsLink" to="/terms-service"> Terms of Service </Link>
                        {/*<p>@2021 Demo Drop</p>*/}
                    </div>
                    <div className="form-container">
                        {setSucces === true && <p>User is created!</p>}
                        <form className="signUp-form" onSubmit={handleSubmit(onSubmit)}>
                            <div className="form-inner-register">
                                <h3 className="popup-h3">Sign up</h3>
                                <label className="sign-lab" htmlFor="username-field">
                                    Username: *
                                    <input className="sign-input"
                                           type="text"
                                           id="username-field"
                                           name="username"
                                           {...register("username", {
                                               required: true,
                                               minLength: 3
                                           })}
                                    />
                                </label>
                                {errors?.username?.type === "required" && <p className="errorMessage">This field is required</p>}
                                {errors?.username?.type === "minLength" && (
                                    <p className="errorMessage">Username has to be minimum 3 character</p>)}

                                <label className="sign-lab" htmlFor="firstName-field">
                                    First name: *
                                    <input className="sign-input"
                                           type="text"
                                           id="firstName-field"
                                           name="firstName"
                                           {...register("firstName", {
                                               required: true,
                                               minLength: 3
                                           })}
                                    />
                                </label>
                                {errors?.firstName?.type === "required" && <p className="errorMessage">This field is required</p>}
                                {errors?.firstName?.type === "minLength" && (
                                    <p className="errorMessage">First name has to be minimum 3 character</p>)}

                                <label className="sign-lab" htmlFor="lastName-field">
                                    Last name: *
                                    <input className="sign-input"
                                           type="text"
                                           id="lastName-field"
                                           name="lastName"
                                           {...register("lastName", {
                                               required: true,
                                               minLength: 3
                                           })}
                                    />
                                </label>
                                {errors?.lastName?.type === "required" && <p className="errorMessage">This field is required</p>}
                                {errors?.lastName?.type === "minLength" && (
                                    <p className="errorMessage">Last name has to be minimum 3 character</p>)}

                                <label className="sign-lab" htmlFor="country-field">
                                    Country: *
                                    <input className="sign-input"
                                           type="text"
                                           id="country-field"
                                           name="country"
                                           {...register("country", {
                                               required: true,
                                               minLength: 3
                                           })}
                                    />
                                </label>
                                {errors?.country?.type === "required" && <p className="errorMessage">This field is required</p>}
                                {errors?.country?.type === "minLength" && (
                                    <p className="errorMessage">Country has to be minimum 3 character</p>)}


                                <label className="sign-lab" htmlFor="email-field">
                                    Email address: *
                                    <input className="sign-input"
                                           type="email"
                                           id="email-field"
                                           name="email"
                                           {...register("email", {
                                               required: true,
                                               maxLength: 50,
                                               pattern: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/i
                                           })}
                                    />
                                </label>
                                {errors?.email?.type === "required" && <p className="errorMessage">This field is required</p>}
                                {errors?.email?.type === "pattern" &&
                                (<p className="errorMessage">Please enter a valid email format</p>)}
                                {errors?.email?.type === "maxLength" && (
                                    <p className="errorMessage">Password can be maximum 50 character</p>)}


                                <label className="sign-lab" htmlFor="password-field">
                                    Password: *
                                    <input className="sign-input"
                                           type="password"
                                           id="password-field"
                                           name="password"
                                           {...register("password", {
                                               required: true,
                                               minLength: 8
                                           })}
                                    />
                                </label>
                                {errors?.password?.type === "required" && <p className="errorMessage">This field is required</p>}
                                {errors?.password?.type === "minLength" && (
                                    <p className="errorMessage">Password has to be minimum 8 character</p>)}

                                <label className="sign-lab" htmlFor="facebook-field">
                                    Facebook:
                                    <input className="sign-input"
                                           type="text"
                                           id="facebook-field"
                                           name="facebook"
                                           {...register("facebook")}
                                    />
                                </label>

                                <label className="sign-lab" htmlFor="instagram-field">
                                    Instagram:
                                    <input className="sign-input"
                                           type="text"
                                           id="instagram-field"
                                           name="instagram"
                                           {...register("instagram")}
                                    />
                                </label>

                                <button type="submit" className="sign-btn" disabled={loading}>
                                    {loading ? "signing up" : "Sign up"}
                                </button>
                                {error && <p>{error}</p>}
                                <p className="paragraph-form">Do you have an account? <Link className="signIn-link"to="/login">Sign In</Link>{" "} </p>
                            </div>
                        </form>
                        )}
                    </div>
                    <Footer />
                </div>
            </div>
        </>
    );
}

export default Register;