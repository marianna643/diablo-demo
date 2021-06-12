import React from 'react';
import Footer from '../components/Footer/Footer';
import Popup from "../components/Login/Popup";
import {Link} from "react-router-dom";
import './Login.css';





    function Login() {
        return (
            <div className="background-container">
                <main>
                    <title className="titel-1">Diablo Studio</title>
                    <title className="titel-2">Demo Drop</title>
                    <p>klik <Link to="/home">hier</Link> </p>
                    <Popup trigger={false}>
                    </Popup>
                    <Footer/>
                </main>
            </div>
        );
    }

    export default Login;
