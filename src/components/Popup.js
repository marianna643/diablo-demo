import React from 'react';
import './Popup.css';


function Popup(props){
    return(props.trigger) ? (
        <div className="popup">
            <form>
            <div className="popup-inner">
                <h3>Sign in</h3>
                <div className="form-group">
                     <label htmlFor="email">Email: </label>
                <input type="text" name="email" id="email"/>
                </div>
                <div className="form-group">
                    <label htmlFor="password">Password:</label>
                    <input type="password" name="password" id="password"/>
                </div>
                <button className="close-btn">close</button>
                {props.children}
            </div>
            </form>
        </div>
    ) : "";
}

export default Popup;