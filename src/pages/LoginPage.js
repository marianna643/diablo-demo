import React from 'react';
import Login from "../components/Login-Register/Login";
import './LoginPage.css';
import {Link} from "react-router-dom";



function LoginPage () {

    return (
        <>
            <div className="background-container">
                <main>
                    <title className="titel-1">Diablo Studio</title>
                    <title className="titel-2">Demo Drop</title>
                    <div className="button-container">
                        <p>@2021 Demo Drop</p>
                    </div>
                </main>
            </div>
            <Login/>
            );
            }
        </>
    )
}

export default LoginPage;

