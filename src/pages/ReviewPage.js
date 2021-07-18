import React, {useEffect, useState} from "react";
import "./ReviewPage.css"
import axios from "axios";
import {useParams} from "react-router";

function ReviewPage() {
    const {id} = useParams();
    const [error, setError] = useState('');
    const [upload, setUpload] = useState([]);
    const [protectedData, setProtectedData] = useState([])
    const [feedback, setFeedback] = useState('');

    useEffect(() => {
        getUpload();
    }, [])

    async function getUpload() {
        setError('');
        try {
            const token = localStorage.getItem('token');
            const response = await axios.get(`http://localhost:8081/api/files/uploads/${id}`, {
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${token}`,
                }
            });
            setUpload(response.data);
        } catch (e) {
            setError("Something went wrong")
        }
    }

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

    async function handleSubmit(e) {
        e.preventDefault();
        try {
            const token = localStorage.getItem('token');

            const formData = new FormData()
            formData.append("feedback", feedback);

            await axios.put(`http://localhost:8081/api/files/uploads/${id}`, formData, {
                headers: {
                    "Content-Type": "multipart/form-data",
                    Authorization: `Bearer ${token}`,
                }});
        } catch (e) {
            setError("Something went wrong while uploading feedback, please try again.")
        }
    }

    return (
        <>
            <div className="reviewPage-container">
                <div className="review">
                    <div className="reviewUpload-user">
                        <div className="reviewUpload-label">User: {upload.name}</div>
                    </div>
                    <div className="reviewTitle">
                        <label className="reviewTitle-label">Demo titel: </label>
                        <div classname ="demoName"> {upload.demo}</div>
                    </div>
                    <div className="reviewMessage">
                        <label className="reviewMessage-message-label">Message from uploader:</label>
                        <div className="reviewMessage-message">
                            {upload.message}
                        </div>
                    </div>
                    <form className="reviewFeedback-container" onSubmit={handleSubmit}>
                        <label className="reviewFeedback-label">Give a review</label>
                        <input className="reviewFeedback-comment"
                               name="feedback"
                               maxLength="120"
                               value={feedback}
                               onChange={(e) => setFeedback(e.target.value)}
                        />
                        <button type='submit' className= "submit-btn">Submit</button>

                        <div className="audio-container">
                            <audio controls src={upload.downloadUrl} type="audio/mpeg">
                            </audio>
                            <div className="downloadLink-container">
                                <p><a className="download-demo" href={upload.downloadUrl}>Download demo</a></p>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </>
    );
}

export default ReviewPage;