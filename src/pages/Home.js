import React from 'react';
import PopupLogin from '../components/Login-Register/PopupLogin';
import {Link} from 'react-router-dom';
import './Home.css';
import { useState } from 'react';






    function Home() {
        const [buttonPopupLogin, setButtonPopupLogin] = useState( false);

        return (
            <div className="background-container">
                <main>
                    <title className="titel-1">Diablo Studio</title>
                    <title className="titel-2">Demo Drop</title>
                    <PopupLogin trigger={buttonPopupLogin}>
                    </PopupLogin>
                    <div className="button-container">
                        <button className="signIn-button" onClick={()=> setButtonPopupLogin (true)}>
                            Sign in
                        </button>
                        <button type="button" className="signUp-button">
                            Sign up
                        </button>
                    </div>
                </main>
            </div>
        );
    }

    export default Home;
