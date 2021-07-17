import React, {useEffect, useState} from "react";
import "./DemoUpload.css"
import axios from "axios";

function Upload() {
    const [uploadProgress, setUploadProgress] = useState('')
    const [formError, setFormError] = useState('');
    const [protectedData, setProtectedData] = useState('');
    const [uploadError, setUploadError] = useState('')
    const [file, setFile] = useState('');
    const [message, setMessage] = useState('');
    const [artist, setArtist] = useState('');
    const [titel, setTitel] = useState('');
    const [formName, setFormName] = useState('');
    const [formEmail, setFormEmail] = useState('');


    useEffect(() => {
        async function getProtectedData() {
            setFormError('');
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
                setFormError('Something went wrong retrieving the data!')
            }
        }

        getProtectedData();
    }, []);

    async function handleSubmit(e) {
        e.preventDefault();
        try {
            const token = localStorage.getItem('token');

            const formData = new FormData()
            formData.append("name", formName);
            formData.append("email", formEmail);
            formData.append("file", file, file.name);
            formData.append("artist", artist);
            formData.append("titel", titel);
            formData.append("message", message);


            await axios.post('http://localhost:8081/api/files/uploads/', formData, {
                onUploadProgress: progressEvent => {
                    setUploadProgress("Uploading: " + Math.round(progressEvent.loaded / progressEvent.total) * 100 + "%");},
                headers: {
                    "Content-Type": "multipart/form-data",
                    Authorization: `Bearer ${token}`,
                }});
        } catch (e) {
            setUploadError("Something went wrong while uploading, please try again.")
        }
    }

    return (
        <>
            <div className="page-container">
                <div className="image-upload">
                    <h1 className="upload-h1">Demo Upload</h1>
                    <div className="mp3-container">
                        <h3 className="upload-h3">MP3 max 20MB</h3>
                    </div>
                    <div className="upload">
                        <form className="formUpload-group"
                              onSubmit={handleSubmit}>
                            {formError && <p className="message-error">{formError}</p>}
                            {uploadError && <p className="message-error">{uploadError}</p>}
                            <input className= "form-upload"
                                   type="file"
                                   onChange={(e) => setFile(e.target.files[0])}
                                   accept=".mp3">
                            </input>
                            <div className="form-item">
                                <label className="form-title">Artist </label>
                                <input className="form-upload"
                                       type="text"
                                       name="artist"
                                       id="artist"
                                       value={artist}
                                       onChange={(e) => setArtist(e.target.value)}>
                                </input>
                            </div>
                            <div className="form-item">
                                <label className="form-title">Song titel </label>
                                <input className="form-upload"
                                       name="titel"
                                       value={titel}
                                       required
                                       onChange={(e) => setTitel(e.target.value)}>
                                </input>
                            </div>
                            <div className="form-item">
                                <label className="form-title">Comment</label>
                                <textarea className="form-input-comment"
                                          name="comment"
                                          rows="5"
                                          value={message}
                                          required
                                          onChange={(e) => setMessage(e.target.value)}
                                />
                            </div>
                            {uploadProgress && <p className="uploadProgress-line">{uploadProgress}</p>}
                            <button type="submit" className="submit-btn">
                                Submit
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Upload;