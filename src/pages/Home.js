import React from 'react';
import PopupLogin from '../components/Login-Register/PopupLogin';
import PopupRegister from '../components/Login-Register/PopupRegister';
import './Home.css';
import { useState } from 'react';






    function Home() {
        const [buttonPopupLogin, setButtonPopupLogin] = useState( false);
        const [buttonPopupRegister, setButtonPopupRegister] = useState( false);

        return (
            <div className="background-container">
                <main>
                    <title className="titel-1">Diablo Studio</title>
                    <title className="titel-2">Demo Drop</title>
                    <PopupLogin trigger={buttonPopupLogin} setTrigger={setButtonPopupLogin} >
                    </PopupLogin>
                    <PopupRegister trigger={buttonPopupRegister} setTrigger={setButtonPopupRegister} >
                    </PopupRegister>
                    <div className="button-container">
                        <button className="signIn-button" onClick={()=> setButtonPopupLogin (true)}>
                            Sign in
                        </button>
                        <button className="signUp-button" onClick={()=> setButtonPopupRegister (true)}>
                            Sign up
                        </button>
                    </div>
                </main>
            </div>
        );
    }

    export default Home;
