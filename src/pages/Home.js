import React from 'react';
import './Home.css';
import {Link} from "react-router-dom";


    function Home() {


        return (
            <div className="background-container">
                <main>
                    <title className="titel-1">Diablo Studio</title>
                    <title className="titel-2">Demo Drop</title>
                    <div className="button-container">
                        <Link to="/login"><button type="button" className="signIn-button">
                            Sign in
                        </button>
                        </Link>
                        <Link to="/register"><button type="button" className="signUp-button">
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
