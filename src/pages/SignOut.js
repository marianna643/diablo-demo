import React from 'react';
import {Link} from "react-router-dom";
import './SignOut.css';
import TopMenu from "../components/TopMenu/TopMenu";




function SignOut () {
    return (
        <>
        <div>
            <TopMenu/>
            <div className="signOut-container">
                <h1 className="sign-h1">You have successfully Signed Out of DEMO DROP</h1>
                <Link to="/"><button type="button" className="logIn-btn">
                    Sign In
                </button>
                </Link>
            </div>
        </div>
            </>
    );
}

export default SignOut;