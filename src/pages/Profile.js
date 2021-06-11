import React from 'react';
import TopMenu from '../components/TopMenu/TopMenu';
import './Profile.css';
import edit from "../assets/edit.png";


function Profile () {
    return (
        <>
            <TopMenu/>
            <h1>My profile</h1>
            <div className="image-edit">
                <img src={edit} width="80" height="80" />
            </div>
            <div className="profile">
                <form>
                        <div className="formProfile-group">
                        <label htmlFor="username">User Name *</label>
                        <input type="text" name="username" id="username"/>
                    </div>
                    <div className="formProfile-group">
                        <label htmlFor="firstname">First Name *</label>
                        <input type="text" name="firstname" id="firstname"/>
                    </div>
                    <div className="formProfile-group">
                        <label htmlFor="lastname">Last Name *</label>
                        <input type="text" name="lastname" id="lastname"/>
                    </div>
                    <div className="formProfile-group">
                        <label htmlFor="email">Email address *</label>
                        <input type="email" name="email" id="email"/>
                    </div>
                    <div className="formProfile-group">
                        <label htmlFor="country">Country *</label>
                        <input type="text" name="country" id="country"/>
                    </div>
                    <div className="formProfile-group">
                        <label htmlFor="country">Country *</label>
                        <input type="text" name="country" id="country"/>
                    </div>
                    <div className="formProfile-group">
                        <label htmlFor="facebook">Facebook</label>
                        <input type="url" name="facebook" id="facebook"/>
                    </div>
                    <div className="formProfile-group">
                        <label htmlFor="instagram">Instagram</label>
                        <input type="url" name="instagram" id="instagram"/>
                    </div>
                    <button type="button" className="update-btn">
                    Update
                    </button>
                </form>
            </div>
        </>
    );
}

export default Profile;