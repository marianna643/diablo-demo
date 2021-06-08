import React from 'react';
import './Popup.css';



function Popup(props){
    return(props.trigger) ? (
        <div className="popup">
            <form>
            <div className="popup-inner">
                <h3><strong>Sign</strong> in</h3>
                {/* <div className="close-btn"><img src={myImage} alt=""/></div> */}
                <div className="form-group">
                     <label htmlFor="email">Email address:</label>
                <input type="text" name="email" id="email"/>
                </div>
                <div className="form-group">
                    <label htmlFor="password">Password:</label>
                    <input type="password" name="password" id="password"/>
                </div>
                <button type="button" className="sign-btn">
                    Sign in
                </button>
            </div>
            </form>
            {props.children}
        </div>
    ) : "";
}

export default Popup;