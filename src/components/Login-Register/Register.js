import React,  { useState } from 'react';
import { useForm } from 'react-hook-form';
import './Register.css';
import {Link, useHistory} from "react-router-dom";



function Register() {
    const {handleSubmit, register, formState: { errors }} = useForm();

    const [password, setPassword] = useState("")
    const onSubmitRegister = (data) => {
        console.log(data);
    };

    function validatePassword (value) {
        if (password !== value) return false;
    }


    return (
        <div className="popup">
            <form form-group onSubmit={handleSubmit(onSubmitRegister)}>
                <div className="popup-inner">
                    <div className="headerButtonRegister-container">
                    <h3 className="popup-h3">Sign up</h3>
                    </div>
                    <div className="form-group">
                        <label className="sign-lab" htmlFor="email">Email address:</label>
                        <input className="sign-inp"
                               type="text" name="email"
                               id="email"
                               required={true}
                               requiredError="Required."
                               register={register}
                               errors={errors}
                               pattern={/^[a-zA-Z0-9]+@(?:[a-zA-Z0-9]+\.)+[A-Za-z]+$/}
                               patternError="Please enter a valid email address."
                               />
                    </div>
                    <div className="form-group">
                        <label className="sign-lab" htmlFor="password">Password:</label>
                        <input className="sign-inp"
                               type="password"
                               name="password"
                               id="password"
                               required={true}
                               requiredError="Required."
                               register={register}
                               errors={errors}
                               minLength={8}
                               minLengthError="The password has to be at least 8 characters."

                               validate={(value) => validatePassword(value)}
                               validateError="The passwords do not match."
                        />
                    </div>
                    <div className="form-group">
                        <label className="sign-lab" htmlFor="passwordCheck">Confirm password:</label>
                        <input className="sign-inp"
                               type="password"
                               name="passwordCheck"
                               id="passwordCheck"
                               value={password}
                               onChange={(e)=>setPassword(e.target.value)}
                    />
                    </div>
                    <button type="button" className="sign-btn" >
                        Sign up
                    </button>
                    <p className="paragraph-form">Do you have an account? <Link className="signIn-link"to="/login">Sign In</Link> </p>
                    </div>
            </form>
        </div>
    );
  }

export default Register;