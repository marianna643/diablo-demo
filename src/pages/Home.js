import React from 'react';
import './Home.css';
import {Link, useHistory} from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../components/context/AuthContext";


function Home() {
    const history = useHistory();
    const authData = useContext(AuthContext);
    // console.log("WHAT IS IN THIS DATA?", authData); //

    return (
        <div className="background-container">
            <main>
                <title className="titel-1">Diablo Studio</title>
                <title className="titel-2">Demo Drop</title>
                <div className="button-container">
                    <Link to="/login"><button type="button" className="signIn-button" onClick={() => history.push("/login")}>
                        Sign in
                    </button>
                    </Link>
                    <Link to="/register"><button type="button" className="signUp-button" onClick={() => history.push("/register")}>
                        Sign up
                    </button>
                    </Link>
                </div>
                <Link className="termsLink" to="/terms-service"> Terms of Service </Link>
                <div className="copyright">
                    <p>@2021 Demo Drop</p>
                </div>
            </main>
        </div>
    );
}

export default Home;
