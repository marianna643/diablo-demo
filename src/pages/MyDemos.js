import React from "react";
import "./MyDemos.css";
import {useEffect, useState} from "react";
import axios from "axios";
import ItemCard from "../components/itemCard/ItemCard";
import {Link} from "react-router-dom";
import disc from "../assets/adddemo.png";

function MyDemos() {
    const [uploads, setUploads] = useState([]);
    const [error, setError] = useState('');

    useEffect(() => {
        async function getProtectedData() {
            setError('');
            try {
                const token = localStorage.getItem('token');
                const response = await axios.get(`http://localhost:8081/api/files/uploads/`, {
                    headers: {
                        "Content-Type": "application/json",
                        Authorization: `Bearer ${token}`,
                    }
                })
                setUploads(response.data);
            } catch(e) {
                setError('Something went wrong while fetching data')
            }
        }
        getProtectedData();
    }, []);

    return (
        <>
            <div className="demosPage-container">
                <div className="add-demo-img">
                    <Link to="/demo-upload"> <img src={disc}  alt= "" width="120" height="110" /></Link>
                </div>
                {uploads.length > 0 ?
                    <>
                        <div className="pageCard-container">
                            {uploads.map((upload)=>{
                                return <ItemCard title={upload.demo}
                                                     message={upload.message}
                                                     key={upload.id}
                                                     name={upload.name}
                                                     artist={upload.artist}
                                                     titel={upload.titel}
                                                     feedback={upload.feedback}/>
                            })}
                        </div>
                    </> :
                    <p className="noUploads">You can start to drop it your demo by clicking the disc icon!</p>}
            </div>
        </>
    );
}

export default MyDemos;
