import React from 'react';
import {Link} from "react-router-dom";
import './Login.css';



function Login(){

    return(
        <div className="popup">
            <form>
            <div className="popup-inner">
                <div className="headerButton-container">
                <h3 className="popup-h3">Sign in</h3>
                    {/* <div className="close-btn" onClick={() => props.setTrigger (false)}><img src={myImage} alt=""/></div>*/}
                </div>
                <div className="form-group">
                     <label className="sign-lab" htmlFor="email">Email address:</label>
                <input className="sign-inp"
                       type="text"
                       name="email"
                       id="email"/>
                </div>
                <div className="form-group">
                    <label className="sign-lab" htmlFor="password">Password:</label>
                    <input className="sign-inp"
                           type="password"
                           name="password"
                           id="password"/>
                </div>
                <button type="button" className="sign-btn" >
                    Sign in
                </button>
                <p className="paragraph-form">New to Demo Drop? <Link className="signUp-link"to="/register">Create an account.</Link> </p>
            </div>
                </form>
        </div>
    )
}


export default Login;