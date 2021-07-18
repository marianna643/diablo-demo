import React from 'react';
import { useEffect, useState}from 'react';
import './Profile.css';
import { useAuthState} from "../components/context/AuthContext";
import axios from "axios";
import edit from "../assets/edit.png";


function Profile() {
    const { user } = useAuthState();
    const [error, setError] = useState('');
    const [protectedData, setProtectedData] = useState([]);

    useEffect(() => {
        async function getProtectedData() {
            setError('');
            try {
                const token = localStorage.getItem('token');

                const response = await axios.get('http://localhost:8081/api/user', {
                    headers: {
                        "Content-Type": "application/json",
                        Authorization: `Bearer ${token}`,
                    }
                });
                setProtectedData(response.data);
            } catch(e) {
                setError('Something went wrong while fetching data')
            }
        }
        getProtectedData();
    }, []);

    return (
        <>
            <div className="page-container">
                <div className="pageContent">
                    <h1 className="profile-h1">my profile</h1>
                    <div className="image-edit">
                        <img src={edit}  alt= "" width="80" height="80" />
                    </div>
                    {user &&
                    <>
                        <div className="formProfile-group">
                                <label className="formProfile-label">User name *</label>
                            <div className="formProfile-data">{protectedData.username}</div>
                                <label className="formProfile-label">First name *</label>
                            <div className="formProfile-data">{protectedData.firstName}</div>
                                <label className="formProfile-label">Last name *</label>
                            <div className="formProfile-data">{protectedData.lastName}</div>
                                <label className="formProfile-label">Email address *</label>
                            <div className="formProfile-data">{protectedData.email}</div>
                                <label className="formProfile-label">Country *</label>
                            <div className="formProfile-data">{protectedData.country}</div>
                                <label className="formProfile-label">Facebook</label>
                            <div className="formProfile-data">{protectedData.facebook}</div>
                                <label className="formProfile-label">Instagram</label>
                            <div className="formProfile-data">{protectedData.instagram}</div>
                            <button type="button" className="update-btn">
                                Update
                            </button>
                        </div>
                    </>}
                    {error && <p className="message-error">{error}</p>}
                    {!user &&
                    <p>Please <a href="/login">sign in</a>to view this page!</p>}
                </div>
            </div>
        </>
    );
}

export default Profile;