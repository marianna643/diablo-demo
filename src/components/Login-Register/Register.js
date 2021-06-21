import React,  { useState } from 'react';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import './Register.css';
import {Link} from "react-router-dom";



function Register() {
    const { handleSubmit, formState: { errors }, register } = useForm();
    const [password, setPassword] = useState("");

    async function sendInfo (e) {

        console.log(e)

        try {
            await axios.post('http://localhost:8080/', e)

            console.log(e);
        } catch (error) {
            console.log("helaas")
        }

    }

    const validatePassword = (value)=> {
        if (password !== value) return false;
    }
    return (
        <div className="popup">
            <div onSubmit={handleSubmit(sendInfo)}>
                <div className="popup-inner">
                    <div className="headerButtonRegister-container">
                    <h3 className="popup-h3">Sign up</h3>
                    </div>
                    <div className="form-group">
                        <label className="sign-lab" htmlFor="email">Email address:</label>
                        <input className="sign-inp"
                               type="text" name="email"
                               id="email"
                               {...register("emailRegistration", {
                                   required: true,
                                   validate: (value) => value.includes('@'),
                               })}
                        />{errors.emailRegistration && <p className="errorMessage">The email has to be filled in</p>}
                    </div>
                    <div className="form-group">
                        <label className="sign-lab" htmlFor="password">Password:</label>
                        <input className="sign-inp"
                               type="password"
                               name="password"
                               id="password"
                               value={password}
                               onChange={(e)=>setPassword(e.target.value)}
                        />
                    </div>
                    <div className="form-group">
                        <label className="sign-lab" htmlFor="passwordCheck">Confirm password:</label>
                        <input className="sign-inp"
                               type="password"
                               name="passwordCheck"
                               id="passwordCheck"
                               {...register("confirmPassword", {
                                   required: true,
                                   validate: (value => validatePassword(value))
                               })}
                        />{errors.confirmPassword && <p className="errorMessage">The passwords does not matching </p>}
                    </div>
                    <button type="button" className="sign-btn" >
                        Sign up
                    </button>
                    <p className="paragraph-form">Do you have an account? <Link className="signIn-link"to="/login">Sign In</Link> </p>
                </div>
            </div>
        </div>
    );
  }

export default Register;