import React from 'react';
import Footer from '../components/Footer/Footer';
import Popup from "../components/Login/Popup";





    function Login() {
        return (
            <div className="background-container">
                <main>
                    <title className="titel-1">Diablo Studio</title>
                    <title className="titel-2">Demo Drop</title>
                    <Popup trigger={false}>
                    </Popup>
                    <Footer/>
                </main>
            </div>
        );
    }

    export default Login;
