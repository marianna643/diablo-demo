import React from 'react';
import './PopupRegister.css';
import {Link} from "react-router-dom";




function PopupRegister(props){
    return(props.trigger) ? (
        <div className="popup">
            <form>
                <div className="popup-inner">
                    <h3 className="popup-h3"><strong>Sign</strong> in</h3>
                    {/* <div className="close-btn"><img src={myImage} alt=""/></div> */}
                    <div className="form-group">
                        <label className="sign-lab" htmlFor="email">Email address:</label>
                        <input className="sign-inp" type="text" name="email" id="email"/>
                    </div>
                    <div className="form-group">
                        <label className="sign-lab" htmlFor="password">Password:</label>
                        <input className="sign-inp" type="password" name="password" id="password"/>
                    </div>
                    <button type="button" className="sign-btn" >
                        Sign in
                    </button>
                    <Link className="termsLink" to="/terms-service"> Terms of Service </Link>
                    {props.children}
                </div>
            </form>
        </div>
    ) : "";
  }

export default PopupRegister;