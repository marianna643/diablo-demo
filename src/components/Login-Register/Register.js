import React,  { useState } from 'react';
import { useForm } from 'react-hook-form';
import './Register.css';
import {Link, useHistory} from "react-router-dom";
import axios from "axios";



function Register() {
    const history = useHistory();
    const { handleSubmit, register ,formState: { errors }} = useForm();
    const [success, setSucces] = useState(false);
    const [loading, setLoading] = useState(false);

    async function onSubmit(data) {
        console.log("DATA VAN DE GEBRUIKER??", data);
        try {
            setLoading(true);
            const response = await axios.post("http://localhost:3000/register", {
                email: data.email,
                username: data.username,
                password: data.password,
                favoriteThing: "Programming stuff",
            });
            console.log(response);
            setSucces(true);
            setTimeout(() => history.push("/login"), 2000);
        } catch (error) {
            console.log("OH NO", error);
        }

        setLoading(false);
    }

    return (
        <>
            <p>{success && "Registeren is gelukt!"}</p>
            <p>{loading && "Moment geduld aub"}</p>
            <div className="form-container">
                {!success && (
                    <form onSubmit={handleSubmit(onSubmit)}>
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
                                       })}
                                />
                            </label>
                            {errors?.username?.type === "required" && <p className="errorMessage">This field is required</p>}

                            <label className="sign-lab" htmlFor="firstName-field">
                                First name: *
                                <input className="sign-input"
                                       type="text"
                                       id="firstName-field"
                                       name="firstname"
                                       {...register("firstname", {
                                           required: true,
                                       })}
                                />
                            </label>
                            {errors?.firstname?.type === "required" && <p className="errorMessage">This field is required</p>}

                            <label className="sign-lab" htmlFor="lastName-field">
                                Last name: *
                                <input className="sign-input"
                                       type="text"
                                       id="lastName-field"
                                       name="lastname"
                                       {...register("lastname", {
                                           required: true,
                                       })}
                                />
                            </label>
                            {errors?.lastname?.type === "required" && <p className="errorMessage">This field is required</p>}

                            <label className="sign-lab" htmlFor="country-field">
                                Country: *
                                <input className="sign-input"
                                       type="text"
                                       id="country-field"
                                       name="country"
                                       {...register("country", {
                                           required: true,
                                       })}
                                />
                            </label>
                            {errors?.country?.type === "required" && <p className="errorMessage">This field is required</p>}


                            <label className="sign-lab" htmlFor="email-field">
                                Email address: *
                                <input className="sign-input"
                                       type="email"
                                       id="email-field"
                                       name="email"
                                       {...register("email", {
                                           required: true,
                                           pattern: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/i
                                       })}
                                />
                            </label>
                            {errors?.email?.type === "required" && <p className="errorMessage">This field is required</p>}
                            {errors?.email?.type === "pattern" &&
                            (<p className="errorMessage">Please enter a valid email format</p>)}

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

                            <button disabled={loading} type="submit" className="sign-btn" >
                                Sign up
                            </button>
                            <p className="paragraph-form">Do you have an account? <Link className="signIn-link"to="/login">Sign In</Link>{" "} </p>
                        </div>
                    </form>
                )}
            </div>
        </>
    );
}

export default Register;