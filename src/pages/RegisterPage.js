import React from 'react';
import Register from "../components/Login-Register/Register";
import {Link} from "react-router-dom";
import './Home.css';
import {useHistory} from "react-router-dom";



function RegisterPage () {
    return (
        <>  <div className="background-container">
            <main>
                <title className="titel-1">Diablo Studio</title>
                <title className="titel-2">Demo Drop</title>
                <div className="button-container">
                    <div className="copyright">
                        <p>@2021 Demo Drop</p>
                    </div>
                </div>
            </main>
        </div>
            <Register/>
            );
            }

        </>
    )
}

export default RegisterPage;


