import React, {useContext, useEffect, useState} from "react";
import "./AdminAllDemos.css"
import AdminItemCard from "../components/itemCard/AdminItemCard";
import axios from "axios";


function AdminAllDemos() {
    const [uploads, setUploads] = useState([]);
    const [error, setError] = useState('');

    useEffect(() => {
        async function getProtectedData() {
            setError('');
            try {
                const token = localStorage.getItem('token');
                const response = await axios.get(`http://localhost:8081/api/files/uploads/all`, {
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
                {uploads.length > 0 ?
                    <>
                        <div className="pageCard-container">
                            {uploads.map((upload)=>{
                                return <AdminItemCard title={upload.demo}
                                                      message={upload.message}
                                                      key={upload.id}
                                                      name={upload.name}
                                                      artist={upload.artist}
                                                      titel={upload.titel}
                                                      feedback={upload.feedback}
                                                      children="Check out"
                                                      link={`/api/files/uploads/${upload.id}`}/>
                            })}
                        </div>
                    </> :
                    <p className="noUploads">For reviews you can check out the demos!</p>}
            </div>
        </>
    );
}

export default AdminAllDemos;