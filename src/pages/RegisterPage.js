import React,  { useState } from 'react';
import { useForm } from 'react-hook-form';
import './RegisterPage.css';
import {Link, useHistory} from "react-router-dom";
import axios from "axios";
import Footer from "../components/footer/Footer";
import Input from "../components/input/Input";
import Button from "../components/button/Button";



function Register() {
    const history = useHistory();
    const { handleSubmit, register ,formState: { errors }} = useForm();
    const [success, setSucces] = useState(false);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');


    async function onSubmit(data) {

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
            <p>{success && "Registration is successful!!"}</p>
            <p>{loading && "One moment pls"}</p>
            <div className="background-container">
                <title className="titel-1">Diablo Studio</title>
                <title className="titel-2">Demo Drop</title>
                    <div className="form-container">
                        {setSucces === true && <p>User is created!</p>}
                        <form className="signUp-form" onSubmit={handleSubmit(onSubmit)}>
                            <div className="form-inner-register">
                                <h3 className="popup-h3">Sign up</h3>
                                <Input
                                    id="username-field"
                                    type="text"
                                    name="username"
                                    required={true}
                                    register={register}
                                    errors={errors}
                                    minLength={3}
                                    minLengthError="Username has to be minimum 3 character."
                                    requiredError="This field is required."
                                >
                                    Username: *
                                </Input>

                                <Input
                                    type="text"
                                    id="firstName-field"
                                    name="firstName"
                                    required={true}
                                    register={register}
                                    errors={errors}
                                    minLength={3}
                                    minLengthError="First has to be minimum 3 character."
                                    requiredError="This field is required."
                                >
                                    First name: *
                                </Input>

                                <Input
                                    type="text"
                                    id="lastName-field"
                                    name="lastName"
                                    required={true}
                                    register={register}
                                    errors={errors}
                                    minLength={3}
                                    minLengthError="Last name has to be minimum 3 character."
                                    requiredError="This field is required."

                                >
                                    Last name: *
                                </Input>
                                <Input
                                    type="text"
                                    id="country-field"
                                    name="country"
                                    required={true}
                                    register={register}
                                    errors={errors}
                                    minLength={3}
                                    minLengthError="Country has to be minimum 3 character."
                                    requiredError="This field is required."
                                >
                                    Country: *
                                </Input>

                                <Input
                                    type="email"
                                    id="email-field"
                                    name="email"
                                    required={true}
                                    register={register}
                                    errors={errors}
                                    maxLength={50}
                                    pattern={/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/i}
                                    maxLengthError="Email can be maximum 50 character"
                                    requiredError="This field is required."
                                    patternError="Please enter a valid email format"
                                >
                                    Email: *
                                </Input>

                                <Input className="sign-input"
                                       type="password"
                                       id="password-field"
                                       name="password"
                                       required={true}
                                       register={register}
                                       errors={errors}
                                       minLength={8}
                                       requiredError="This field is required."
                                       minLengthError="Password has to be minimum 8 character"
                                >
                                    Password: *
                                </Input>

                                <Input
                                    type="text"
                                    id="facebook-field"
                                    name="facebook"
                                    required={false}
                                    register={register}
                                    errors={false}
                                >
                                    Facebook:
                                </Input>
                                <Input
                                    type="text"
                                    id="instagram-field"
                                    register={register}
                                    name="instagram"
                                    required={false}
                                    errors={false}
                                >
                                    Instagram
                                </Input>

                                <Button type="submit" className="sign-btn" disabled={loading}>
                                    {loading ? "signing up" : "Sign up"}
                                </Button>
                                {error && <p>{error}</p>}
                                <p className="paragraph-form">Do you have an account? <Link className="signIn-link"to="/login">Sign In</Link>{" "} </p>
                            </div>
                        </form>
                        )}
                    </div>
                    <Footer />
            </div>
        </>
    );
}

export default Register;