import React from 'react';
import './PopupRegister.css';
import {Link} from "react-router-dom";
import myImage from "../Login-Register/assetLogin/close.png"




function PopupRegister(props){
    return(props.trigger) ? (
        <div className="popup">
            <form>
                <div className="popup-inner">
                    <div className="headerButtonRegister-container">
                    <h3 className="popup-h3"><strong>Sign</strong> up</h3>
                    <div className="close-btn" onClick={() => props.setTrigger (false)}><img src={myImage} alt=""/></div>
                    </div>
                    <div className="form-group">
                        <label className="sign-lab" htmlFor="email">Email address:</label>
                        <input className="sign-inp"
                               type="text" name="email"
                               id="email"/>
                    </div>
                    <div className="form-group">
                        <label className="sign-lab" htmlFor="password">Password:</label>
                        <input className="sign-inp"
                               type="password"
                               name="password"
                               id="password"/>
                    </div>
                    <div className="form-group">
                        <label className="sign-lab" htmlFor="passwordCheck">Confirm password:</label>
                        <input className="sign-inp"
                               type="password"
                               name="passwordCheck"
                               id="passwordCheck"/>
                    </div>
                    <button type="button" className="sign-btn" >
                        Sign up
                    </button>
                    <Link className="termsLink" to="/terms-service"> Terms of Service </Link>
                    {props.children}
                </div>
            </form>
        </div>
    ) : "";
  }

export default PopupRegister;